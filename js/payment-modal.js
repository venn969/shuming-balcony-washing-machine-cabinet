$(document).ready(function() {
    var paymentModal = $('#paymentModal');
    var paymentCloseBtn = $('#paymentCloseBtn');
    var paymentTabs = $('.payment-tab');
    var paymentQrcodes = $('.payment-qrcode');
    var paymentTriggerBtns = $('.payment-trigger-btn');

    paymentTriggerBtns.on('click', function(e) {
        e.preventDefault();
        var productName = $(this).data('product');
        var productPrice = $(this).data('price');
        
        $('#paymentProductName').text(productName);
        $('#paymentProductPrice').text(productPrice);
        
        paymentModal.addClass('active');
        $('body').css('overflow', 'hidden');
    });

    paymentCloseBtn.on('click', function() {
        paymentModal.removeClass('active');
        $('body').css('overflow', 'auto');
    });

    paymentModal.on('click', function(e) {
        if (e.target === this) {
            paymentModal.removeClass('active');
            $('body').css('overflow', 'auto');
        }
    });

    paymentTabs.on('click', function() {
        var tabType = $(this).data('tab');
        
        paymentTabs.removeClass('active');
        $(this).addClass('active');
        
        paymentQrcodes.removeClass('active');
        $('#' + tabType + 'Qrcode').addClass('active');
    });

    $(document).on('keydown', function(e) {
        if (e.key === 'Escape' && paymentModal.hasClass('active')) {
            paymentModal.removeClass('active');
            $('body').css('overflow', 'auto');
        }
    });
});
