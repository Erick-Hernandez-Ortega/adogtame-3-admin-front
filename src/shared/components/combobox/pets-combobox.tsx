import { useState } from "react";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command";
import { PetName } from "@/features/pets/types/pet.types";
import { cn } from "@/shared/lib/utils";


export const PetsCombobox = ({ pets }: { pets: PetName[] }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string>("");
    const [petId, setPetId] = useState<string>("");

    const handleSelect = (currentValue: string, id: string): void => {
        setValue(currentValue === value ? "" : currentValue);
        setPetId(id);
        setOpen(false);
    };

    return (
        <>
            <Input id="petId" value={petId} className="col-span-3" type="hidden" name="petId" required />

            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="col-span-3 justify-between"
                    >
                        {value
                            ? pets.find((pet) => pet.name === value)?.name
                            : "Selecciona una mascota..."}
                        <ChevronsUpDown className="opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="col-span-3 p-0">
                    <Command>
                        <CommandInput placeholder="Buscar una mascota..." className="h-9" />
                        <CommandList>
                            <CommandEmpty>Mascotas no encontradas.</CommandEmpty>
                            <CommandGroup>
                                {pets.map((pet) => (
                                    <CommandItem
                                        key={pet._id}
                                        value={pet.name}
                                        onSelect={(currentValue: string) => handleSelect(currentValue, pet?._id)}
                                    >
                                        {pet.name}
                                        <Check
                                            className={cn(
                                                "ml-auto",
                                                value === pet.name ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </>
    );
}