$(function() {
    var isChatOpen = false;
    var messageHistory = [];

    function toggleChat() {
        isChatOpen = !isChatOpen;
        $('#aiAssistantChat').toggleClass('active', isChatOpen);
        
        if (isChatOpen) {
            $('#messageInput').focus();
        }
    }

    function closeChat() {
        isChatOpen = false;
        $('#aiAssistantChat').removeClass('active');
    }

    function getCurrentTime() {
        var now = new Date();
        var hours = now.getHours().toString().padStart(2, '0');
        var minutes = now.getMinutes().toString().padStart(2, '0');
        return hours + ':' + minutes;
    }

    function addMessage(content, isUser) {
        var messageHtml = '';
        
        if (isUser) {
            messageHtml = `
                <div class="message user">
                    <div class="message-content">
                        <p>${content}</p>
                        <div class="message-time">${getCurrentTime()}</div>
                    </div>
                    <div class="message-avatar">
                        <i class="bi bi-person"></i>
                    </div>
                </div>
            `;
        } else {
            messageHtml = `
                <div class="message assistant">
                    <div class="message-avatar">
                        <i class="bi bi-robot"></i>
                    </div>
                    <div class="message-content">
                        ${content}
                        <div class="message-time">${getCurrentTime()}</div>
                    </div>
                </div>
            `;
        }

        $('#chatMessages').append(messageHtml);
        $('#chatMessages').scrollTop($('#chatMessages')[0].scrollHeight);
        
        messageHistory.push({
            content: content,
            isUser: isUser,
            time: getCurrentTime()
        });
    }

    function showTypingIndicator() {
        var typingHtml = `
            <div class="typing-indicator" id="typingIndicator">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;
        $('#chatMessages').append(typingHtml);
        $('#chatMessages').scrollTop($('#chatMessages')[0].scrollHeight);
    }

    function hideTypingIndicator() {
        $('#typingIndicator').remove();
    }

    function getAIResponse(userMessage) {
        var message = userMessage.toLowerCase();
        
        var responses = {
            product: {
                keywords: ['产品', '推荐', '款式', '型号', '哪个好', '适合', '选择'],
                response: `
                    <p>我们有多款阳台洗衣机柜，为您推荐：</p>
                    <ul>
                        <li><strong>简约现代铝合金款</strong> - 防水防潮，耐用性强，价格：¥1299起</li>
                        <li><strong>欧式复古实木款</strong> - 高端大气，质感优良，价格：¥1899起</li>
                        <li><strong>北欧简约多层实木款</strong> - 环保健康，简约时尚，价格：¥1599起</li>
                        <li><strong>现代简约PVC款</strong> - 性价比高，经济实惠，价格：¥999起</li>
                        <li><strong>轻奢铝合金款</strong> - 品质卓越，高端定制，价格：¥2199起</li>
                    </ul>
                    <p>请问您的阳台尺寸大概是多少？我可以为您推荐更合适的产品。</p>
                `
            },
            price: {
                keywords: ['价格', '多少钱', '费用', '优惠', '活动', '便宜', '贵'],
                response: `
                    <p>我们的产品价格范围：</p>
                    <ul>
                        <li>基础款：¥999 - ¥1299</li>
                        <li>标准款：¥1299 - ¥1899</li>
                        <li>高端款：¥1899 - ¥2999</li>
                        <li>定制款：根据需求报价</li>
                    </ul>
                    <p>🎉 <strong>限时优惠活动：</strong></p>
                    <ul>
                        <li>新用户首单立减¥200</li>
                        <li>满3000减¥500</li>
                        <li>免费上门测量</li>
                        <li>免费安装服务</li>
                    </ul>
                    <p>您对哪款产品感兴趣？我可以为您提供更详细的价格信息。</p>
                `
            },
            service: {
                keywords: ['服务', '安装', '测量', '售后', '保修', '配送', '上门'],
                response: `
                    <p>我们提供全方位的服务：</p>
                    <ul>
                        <li>📏 <strong>免费上门测量</strong> - 专业团队上门精准测量</li>
                        <li>🛠️ <strong>专业安装服务</strong> - 经验丰富的安装师傅</li>
                        <li>🚚 <strong>免费配送</strong> - 全国包邮，偏远地区除外</li>
                        <li>🔧 <strong>售后保障</strong> - 3年质保，终身维护</li>
                        <li>💬 <strong>7×24小时客服</strong> - 随时为您解答问题</li>
                    </ul>
                    <p>服务流程：</p>
                    <ol>
                        <li>在线咨询或电话预约</li>
                        <li>免费上门测量</li>
                        <li>定制方案设计</li>
                        <li>生产制作</li>
                        <li>配送安装</li>
                        <li>验收付款</li>
                    </ol>
                    <p>您需要预约上门测量服务吗？</p>
                `
            },
            appointment: {
                keywords: ['预约', '联系', '电话', '微信', '客服', '咨询'],
                response: `
                    <p>预约服务非常简单！</p>
                    <p>📞 <strong>联系电话：</strong>400-888-9999</p>
                    <p>💬 <strong>微信咨询：</strong>添加客服微信 "shuming_service"</p>
                    <p>📧 <strong>邮箱：</strong>service@shuming.com</p>
                    <p>🏢 <strong>公司地址：</strong>广东省佛山市顺德区乐从镇家具大道</p>
                    <p>预约时请提供以下信息：</p>
                    <ul>
                        <li>您的姓名</li>
                        <li>联系电话</li>
                        <li>详细地址</li>
                        <li>预约时间</li>
                        <li>需求描述</li>
                    </ul>
                    <p>我们的客服会在24小时内与您联系确认。</p>
                `
            },
            material: {
                keywords: ['材质', '材料', '铝合金', '实木', 'PVC', '质量', '耐用'],
                response: `
                    <p>我们的产品采用优质材料：</p>
                    <ul>
                        <li><strong>铝合金系列</strong>：航空级铝合金，防水防潮，使用寿命20年以上</li>
                        <li><strong>实木系列</strong>：进口多层实木板，环保E0级，防潮防虫</li>
                        <li><strong>PVC系列</strong>：高强度PVC板，防水防火，经济实惠</li>
                    </ul>
                    <p>所有产品均通过质量认证：</p>
                    <ul>
                        <li>ISO9001质量管理体系认证</li>
                        <li>中国环境标志产品认证</li>
                        <li>绿色建材产品认证</li>
                    </ul>
                    <p>您对哪种材质比较感兴趣？</p>
                `
            },
            size: {
                keywords: ['尺寸', '大小', '规格', '长宽高', '容量', '能放'],
                response: `
                    <p>我们提供多种尺寸规格：</p>
                    <ul>
                        <li><strong>标准款：</strong>宽120cm × 高80cm × 深60cm</li>
                        <li><strong>加宽款：</strong>宽150cm × 高80cm × 深60cm</li>
                        <li><strong>定制款：</strong>根据您的阳台尺寸量身定制</li>
                    </ul>
                    <p>容量说明：</p>
                    <ul>
                        <li>可容纳洗衣机（7-10kg）</li>
                        <li>预留储物空间</li>
                        <li>台面可放置洗衣用品</li>
                    </ul>
                    <p>建议您先测量一下阳台的尺寸，我可以为您推荐最合适的产品。</p>
                `
            },
            warranty: {
                keywords: ['保修', '质保', '售后', '维修', '换货', '退货'],
                response: `
                    <p>我们的售后保障：</p>
                    <ul>
                        <li>🛡️ <strong>3年质保</strong> - 免费维修或更换配件</li>
                        <li>🔄 <strong>7天无理由退换</strong> - 不满意可退换</li>
                        <li>🔧 <strong>终身维护</strong> - 提供终身维修服务</li>
                        <li>📦 <strong>配件保障</strong> - 所有配件终身供应</li>
                    </ul>
                    <p>质保范围：</p>
                    <ul>
                        <li>板材开裂、变形</li>
                        <li>五金件损坏</li>
                        <li>结构松动</li>
                        <li>表面涂层脱落</li>
                    </ul>
                    <p>如需售后，请拨打客服电话：400-888-9999</p>
                `
            },
            delivery: {
                keywords: ['配送', '发货', '物流', '快递', '时间', '多久'],
                response: `
                    <p>配送服务说明：</p>
                    <ul>
                        <li>📦 <strong>发货时间</strong>：下单后3-5个工作日</li>
                        <li>🚚 <strong>配送范围</strong>：全国包邮（偏远地区除外）</li>
                        <li>⏱️ <strong>配送时效</strong>：广东省内2-3天，省外3-7天</li>
                        <li>📱 <strong>物流跟踪</strong>：提供实时物流信息</li>
                    </ul>
                    <p>配送流程：</p>
                    <ol>
                        <li>订单确认</li>
                        <li>生产制作</li>
                        <li>质量检验</li>
                        <li>打包发货</li>
                        <li>物流配送</li>
                        <li>上门安装</li>
                    </ol>
                    <p>定制产品需要额外3-5天制作时间。</p>
                `
            },
            payment: {
                keywords: ['支付', '付款', '定金', '尾款', '分期'],
                response: `
                    <p>支付方式：</p>
                    <ul>
                        <li>💳 <strong>在线支付</strong>：微信支付、支付宝、银联</li>
                        <li>🏦 <strong>银行转账</strong>：支持各大银行转账</li>
                        <li>📱 <strong>分期付款</strong>：支持花呗、信用卡分期</li>
                    </ul>
                    <p>付款流程：</p>
                    <ol>
                        <li>确认订单</li>
                        <li>支付定金（30%）</li>
                        <li>开始生产制作</li>
                        <li>支付尾款（70%）</li>
                        <li>安排配送安装</li>
                    </ol>
                    <p>所有支付均通过第三方平台，安全可靠。</p>
                `
            },
            greeting: {
                keywords: ['你好', '您好', '在吗', '在不在', 'hello', 'hi'],
                response: `
                    <p>您好！我是舒铭的AI销售助手，很高兴为您服务！</p>
                    <p>我可以帮您：</p>
                    <ul>
                        <li>🏠 推荐适合您阳台的洗衣机柜</li>
                        <li>💰 咨询产品价格和优惠活动</li>
                        <li>📏 了解测量和安装服务</li>
                        <li>🛠️ 介绍产品材质和工艺</li>
                        <li>📞 预约上门服务</li>
                    </ul>
                    <p>请问有什么可以帮助您的？</p>
                `
            },
            thanks: {
                keywords: ['谢谢', '感谢', '谢谢了', '感谢了'],
                response: `
                    <p>不客气！很高兴能为您服务！😊</p>
                    <p>如果您还有其他问题，随时可以咨询我。</p>
                    <p>祝您生活愉快！</p>
                `
            },
            goodbye: {
                keywords: ['再见', '拜拜', '88', 'bye', '走了'],
                response: `
                    <p>好的，再见！👋</p>
                    <p>如果您需要帮助，随时欢迎回来咨询。</p>
                    <p>祝您生活愉快，万事如意！</p>
                `
            }
        };

        for (var key in responses) {
            var response = responses[key];
            for (var i = 0; i < response.keywords.length; i++) {
                if (message.indexOf(response.keywords[i]) !== -1) {
                    return response.response;
                }
            }
        }

        return `
            <p>感谢您的咨询！我可能没有完全理解您的问题。</p>
            <p>您可以：</p>
            <ul>
                <li>点击下方的快捷按钮</li>
                <li>拨打客服电话：400-888-9999</li>
                <li>添加微信：shuming_service</li>
            </ul>
            <p>或者您可以尝试询问：</p>
            <ul>
                <li>产品推荐</li>
                <li>价格咨询</li>
                <li>服务介绍</li>
                <li>预约服务</li>
            </ul>
        `;
    }

    function processUserMessage(message) {
        if (!message.trim()) return;

        addMessage(message, true);
        $('#messageInput').val('');

        showTypingIndicator();

        setTimeout(function() {
            hideTypingIndicator();
            var response = getAIResponse(message);
            addMessage(response, false);
        }, 1000 + Math.random() * 1000);
    }

    $('#aiAssistantToggle').on('click', toggleChat);
    $('#closeChat').on('click', closeChat);

    $('#sendMessage').on('click', function() {
        var message = $('#messageInput').val();
        processUserMessage(message);
    });

    $('#messageInput').on('keypress', function(e) {
        if (e.which === 13) {
            var message = $(this).val();
            processUserMessage(message);
        }
    });

    $('.quick-btn').on('click', function() {
        var action = $(this).data('action');
        var actionMessages = {
            'product': '请帮我推荐一款产品',
            'price': '我想了解价格信息',
            'service': '请介绍一下服务内容',
            'appointment': '我想预约服务'
        };
        
        var message = actionMessages[action] || action;
        processUserMessage(message);
    });

    $(document).on('keydown', function(e) {
        if (e.key === 'Escape' && isChatOpen) {
            closeChat();
        }
    });

    var searchData = [
        {
            id: 1,
            title: '简约现代铝合金款',
            desc: '防水防潮，耐用性强，价格：¥1299起',
            type: '产品',
            keywords: ['铝合金', '现代', '简约', '防水', '防潮', '耐用']
        },
        {
            id: 2,
            title: '欧式复古实木款',
            desc: '高端大气，质感优良，价格：¥1899起',
            type: '产品',
            keywords: ['实木', '欧式', '复古', '高端', '大气']
        },
        {
            id: 3,
            title: '北欧简约多层实木款',
            desc: '环保健康，简约时尚，价格：¥1599起',
            type: '产品',
            keywords: ['多层实木', '北欧', '简约', '环保', '健康', '时尚']
        },
        {
            id: 4,
            title: '现代简约PVC款',
            desc: '性价比高，经济实惠，价格：¥999起',
            type: '产品',
            keywords: ['PVC', '性价比', '经济', '实惠']
        },
        {
            id: 5,
            title: '轻奢铝合金款',
            desc: '品质卓越，高端定制，价格：¥2199起',
            type: '产品',
            keywords: ['轻奢', '铝合金', '高端', '定制', '品质']
        },
        {
            id: 6,
            title: '免费上门测量',
            desc: '专业团队上门精准测量您的阳台尺寸',
            type: '服务',
            keywords: ['测量', '上门', '免费', '尺寸', '专业']
        },
        {
            id: 7,
            title: '专业安装服务',
            desc: '经验丰富的安装师傅，确保安装质量',
            type: '服务',
            keywords: ['安装', '服务', '专业', '质量']
        },
        {
            id: 8,
            title: '免费配送服务',
            desc: '全国包邮，偏远地区除外',
            type: '服务',
            keywords: ['配送', '免费', '包邮', '全国']
        },
        {
            id: 9,
            title: '3年质保',
            desc: '所有产品享受3年质保服务',
            type: '服务',
            keywords: ['质保', '保修', '3年', '售后']
        },
        {
            id: 10,
            title: '限时优惠活动',
            desc: '新用户首单立减¥200，满3000减¥500',
            type: '优惠',
            keywords: ['优惠', '活动', '折扣', '立减', '满减']
        },
        {
            id: 11,
            title: '产品材质介绍',
            desc: '铝合金、实木、PVC等多种材质可选',
            type: '产品信息',
            keywords: ['材质', '材料', '铝合金', '实木', 'PVC']
        },
        {
            id: 12,
            title: '产品尺寸规格',
            desc: '标准款、加宽款、定制款多种尺寸',
            type: '产品信息',
            keywords: ['尺寸', '规格', '大小', '长宽高', '容量']
        },
        {
            id: 13,
            title: '预约上门服务',
            desc: '联系电话：400-888-9999，微信：shuming_service',
            type: '服务',
            keywords: ['预约', '联系', '电话', '微信', '客服']
        },
        {
            id: 14,
            title: '如何选择合适的产品',
            desc: '根据阳台尺寸、预算、使用习惯选择',
            type: '常见问题',
            keywords: ['选择', '推荐', '合适', '建议', '哪个好']
        },
        {
            id: 15,
            title: '产品保修政策',
            desc: '3年质保，终身维护，免费维修',
            type: '常见问题',
            keywords: ['保修', '质保', '维修', '换货', '退货']
        }
    ];

    function performSearch(query) {
        if (!query.trim()) {
            return [];
        }

        var lowerQuery = query.toLowerCase();
        return searchData.filter(function(item) {
            var titleMatch = item.title.toLowerCase().includes(lowerQuery);
            var descMatch = item.desc.toLowerCase().includes(lowerQuery);
            var keywordMatch = item.keywords.some(function(keyword) {
                return keyword.toLowerCase().includes(lowerQuery);
            });
            return titleMatch || descMatch || keywordMatch;
        });
    }

    function displaySearchResults(results) {
        var $resultsList = $('#searchResultsList');
        $resultsList.empty();

        if (results.length === 0) {
            $resultsList.html('<div class="no-results">未找到相关结果</div>');
            return;
        }

        results.forEach(function(item) {
            var resultHtml = `
                <div class="search-result-item" data-id="${item.id}">
                    <span class="result-type">${item.type}</span>
                    <div class="result-title">${item.title}</div>
                    <div class="result-desc">${item.desc}</div>
                </div>
            `;
            $resultsList.append(resultHtml);
        });
    }

    function handleSearchResultClick(itemId) {
        var item = searchData.find(function(d) { return d.id === itemId; });
        if (item) {
            var message = '我想了解：' + item.title;
            $('#searchInput').val('');
            $('#searchResults').hide();
            processUserMessage(message);
        }
    }

    $('#searchBtn').on('click', function() {
        var query = $('#searchInput').val();
        var results = performSearch(query);
        displaySearchResults(results);
        $('#searchResults').toggle(results.length > 0 || query.trim());
    });

    $('#searchInput').on('input', function() {
        var query = $(this).val();
        if (query.trim()) {
            var results = performSearch(query);
            displaySearchResults(results);
            $('#searchResults').show();
        } else {
            $('#searchResults').hide();
        }
    });

    $('#searchInput').on('keypress', function(e) {
        if (e.which === 13) {
            var query = $(this).val();
            var results = performSearch(query);
            displaySearchResults(results);
            $('#searchResults').toggle(results.length > 0 || query.trim());
        }
    });

    $(document).on('click', '.search-result-item', function() {
        var itemId = $(this).data('id');
        handleSearchResultClick(itemId);
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest('.ai-search-bar').length) {
            $('#searchResults').hide();
        }
    });
});