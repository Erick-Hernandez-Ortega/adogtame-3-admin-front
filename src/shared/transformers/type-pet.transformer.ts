export default function typePetTransformer(petType: string): string {
    switch (petType) {
        case "Dog":
            return "Perro";
        case "Cat":
            return "Gato";
        case "Other":
            return "Otro";
        default:
            return petType;
    }
}