import qrcode
from PIL import Image, ImageDraw, ImageFont

def create_qr_code(text, output_filename):
    # Crear un código QR básico
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=4,
    )

    # Añadir datos al código QR
    qr.add_data(text)
    qr.make(fit=True)

    # Crear imagen QR
    img = qr.make_image(fill_color="black", back_color="white")

    # Guardar la imagen
    img.save(output_filename)

def generate_qr_codes_for_guests(guest_list):
    for index, guest in enumerate(guest_list, start=1):
        guest_name = guest['name']
        qr_data = f"Guest Name: {guest_name}\nID: {index}"
        output_filename = f"qr_codes/qr_{index}_{guest_name}.png"
        
        # Crear código QR para cada invitado
        create_qr_code(qr_data, output_filename)
        print(f"Código QR generado para {guest_name}: {output_filename}")

# Lista de invitados
guest_list = [
    {"name": "Juan Perez"},
    {"name": "Maria Lopez"},
    {"name": "Carlos Gomez"},
    # Agregar más nombres hasta llegar a 50
]

# Generar códigos QR
generate_qr_codes_for_guests(guest_list)
