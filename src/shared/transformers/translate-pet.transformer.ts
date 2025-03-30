export function translatePetType(petType: string | undefined): string {
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

export function translatePetSize(petSize: string | undefined): string {
    switch (petSize) {
        case "Pequeno":
            return "Little";
        case "Mediano":
            return "Medium";
        case "Grande":
            return "Large";
        case "Muy grande":
            return "VeryLarge";
        default:
            return "";
    }
}
