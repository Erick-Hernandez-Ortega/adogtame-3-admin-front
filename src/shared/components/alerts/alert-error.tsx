import { CircleX } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";

interface AlertErrorProps {
    isOpen: boolean;
    title: string;
    description: string;
    btnCancel?: string;
    btnContinue?: string;
    onClose?: () => void;
}

export const AlertError = ({ isOpen, title, description, btnCancel, btnContinue, onClose }: AlertErrorProps) => {

    return (
        <AlertDialog open={isOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className="flex items-center gap-x-2">
                        <CircleX color="red" />
                        {title}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    {btnCancel && <AlertDialogCancel onClick={onClose}>{btnCancel}</AlertDialogCancel>}
                    {btnContinue && <AlertDialogAction>{btnContinue}</AlertDialogAction>}
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};
