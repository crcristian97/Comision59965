import subprocess

def get_wifi_profiles():
    result = subprocess.run(
        ['netsh', 'wlan', 'show', 'profiles'],
        capture_output=True, text=True)
    
    profiles = []

    for line in result.stdout.split('\n'):
        if "Todos los perfiles de usuario" in line or "All User Profile" in line:
            profile_name = line.split(":")[1].strip()
            profiles.append(profile_name)

    return profiles

def get_wifi_password(profile):
    result = subprocess.run(
        ['netsh', 'wlan', 'show', 'profile', 
         profile, 'key=clear'], 
        capture_output=True, text=True)
    password = None

    for line in result.stdout.split('\n'):
        if "Contenido de la clave" in line or "Key Content" in line:
            password = line.split(":")[1].strip()

    return password

def main():
    profiles = get_wifi_profiles()
    if not profiles:
        print("No se encontraron perfiles de Wi-Fi almacenados.")
        return

    for profile in profiles:
        password = get_wifi_password(profile)
        print(f'Perfil: {profile}\nContraseña: {password}\n')

if __name__ == "__main__":
    main()
