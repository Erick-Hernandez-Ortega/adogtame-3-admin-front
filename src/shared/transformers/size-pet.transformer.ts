export default function sizePetTransformer(petSize: string): string {
    switch (petSize) {
        case "Little":
            return "Pequeno";
        case "Medium":
            return "Mediano";
        case "Large":
            return "Grande";
        case "ExtraLarge":
            return "Muy grande";
        default:
            return petSize;
    }
}