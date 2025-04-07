"use server";
import { findAllAdoptions } from "../services/adoptions.service";
import adoptionTransformer from "../transformers/adoption.transformer";
import { AdoptionResponse } from "../types/adoptions.types";

export default async function getAdoptions() {
    const adoptions: AdoptionResponse[] = await findAllAdoptions();

    return { 
        adoptions: adoptions.map((adoption: AdoptionResponse) => adoptionTransformer(adoption))
    }
}