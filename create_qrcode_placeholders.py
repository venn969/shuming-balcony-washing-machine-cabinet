from PIL import Image, ImageDraw, ImageFont
import os

def create_qrcode_placeholder(filename, title, color, icon):
    width = 300
    height = 300
    img = Image.new('RGB', (width, height), color='white')
    draw = ImageDraw.Draw(img)
    
    border_color = color
    border_width = 4
    draw.rectangle([border_width, border_width, width-border_width, height-border_width], 
                  outline=border_color, width=border_width)
    
    try:
        font_large = ImageFont.truetype("arial.ttf", 32)
        font_small = ImageFont.truetype("arial.ttf", 18)
    except:
        font_large = ImageFont.load_default()
        font_small = ImageFont.load_default()
    
    text = title
    bbox = draw.textbbox((0, 0), text, font=font_large)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    position_x = (width - text_width) // 2
    position_y = (height - text_height) // 2 - 20
    
    draw.text((position_x, position_y), text, fill=color, font=font_large)
    
    subtext = "请替换为真实收款码"
    bbox2 = draw.textbbox((0, 0), subtext, font=font_small)
    text_width2 = bbox2[2] - bbox2[0]
    text_height2 = bbox2[3] - bbox2[1]
    
    position_x2 = (width - text_width2) // 2
    position_y2 = position_y + text_height + 20
    
    draw.text((position_x2, position_y2), subtext, fill='gray', font=font_small)
    
    img.save(filename)
    print(f"Created {filename}")

output_dir = "assets/images"
os.makedirs(output_dir, exist_ok=True)

wechat_path = os.path.join(output_dir, "wechat-pay.png")
alipay_path = os.path.join(output_dir, "alipay.png")

create_qrcode_placeholder(wechat_path, "微信收款码", "#07c160", "💚")
create_qrcode_placeholder(alipay_path, "支付宝收款码", "#1677ff", "💙")

print("\n占位符图片已创建完成！")
print("请将真实的微信收款码保存为: assets/images/wechat-pay.png")
print("请将真实的支付宝收款码保存为: assets/images/alipay.png")
