export function statusPublicationTransformer(status: string): string {
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

export function getStatusVariant(status: string): 'default' | 'secondary' | 'success' | 'destructive' {
    switch (status) {
        case "created":
            return "default";
        case "archived":
            return "secondary";
        case "completed":
            return "success";
        case "rejected":
            return "destructive";
        case "approved":
            return "success";
        default:
            return "default";
    }
}