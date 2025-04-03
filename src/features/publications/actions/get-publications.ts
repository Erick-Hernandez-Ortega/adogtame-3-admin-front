import { findAllPublications } from "../services/publications.service";
import { publicationTransformer } from "../transformers/publications.transformers";

export default async function getPublications() {
    const publications = await findAllPublications();

    return { 
        publications: publications.map(publication => publicationTransformer(publication))
    };
}