import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки с формы консультации на email адвоката"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    message = body.get('message', '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Имя и телефон обязательны'}, ensure_ascii=False)
        }

    smtp_password = os.environ.get('SMTP_PASSWORD', '')
    from_email = '89025436378@mail.ru'
    to_email = '89025436378@mail.ru'

    subject = f'Новая заявка на консультацию — {name}'

    html_body = f"""
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f5f5f5; padding: 20px;">
      <div style="background: #1a1c22; padding: 30px; border-top: 3px solid #c9a84c;">
        <h2 style="color: #c9a84c; margin: 0 0 20px 0; font-size: 20px;">Новая заявка на консультацию</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; color: #999; font-size: 13px; width: 120px;">Имя:</td>
            <td style="padding: 10px 0; color: #f0ede4; font-size: 15px; font-weight: bold;">{name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #999; font-size: 13px;">Телефон:</td>
            <td style="padding: 10px 0; color: #f0ede4; font-size: 15px; font-weight: bold;">
              <a href="tel:{phone}" style="color: #c9a84c; text-decoration: none;">{phone}</a>
            </td>
          </tr>
          {"<tr><td style='padding: 10px 0; color: #999; font-size: 13px; vertical-align: top;'>Ситуация:</td><td style='padding: 10px 0; color: #f0ede4; font-size: 14px; line-height: 1.6;'>" + message + "</td></tr>" if message else ""}
        </table>
      </div>
      <p style="color: #999; font-size: 12px; margin-top: 15px; text-align: center;">
        Заявка отправлена с сайта адвоката Маханова Д.А.
      </p>
    </div>
    """

    msg = MIMEMultipart('alternative')
    msg['Subject'] = subject
    msg['From'] = from_email
    msg['To'] = to_email
    msg.attach(MIMEText(html_body, 'html', 'utf-8'))

    with smtplib.SMTP_SSL('smtp.mail.ru', 465) as server:
        server.login(from_email, smtp_password)
        server.sendmail(from_email, to_email, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True})
    }