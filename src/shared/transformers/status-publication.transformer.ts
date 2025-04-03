export default function statusPublicationTransformer(status: string): string {
    switch (status) {
        case "created":
            return "Creada";
        case "archived":
            return "Archivada";
        case "completed":
            return "Completada";
        case "rejected":
            return "Rechazada";
        case "approved":
            return "Aprobada";
        default:
            return status;
    }
}
