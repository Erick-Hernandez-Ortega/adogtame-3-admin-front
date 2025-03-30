export default function translatePet(petType: string | undefined): string {
    switch (petType) {
        case "Perro":
            return "Dog";
        case "Gato":
            return "Cat";
        case "Otro":
            return "Other";
        default:
            return "";
    }
}