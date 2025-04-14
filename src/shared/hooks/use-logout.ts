import logout from "@/features/auth/actions/logout";
import { useRouter } from "next/navigation";

export const useLogout = () => {
    const router = useRouter();

    const closeSession = async (): Promise<void> => {
        const { redirect } = await logout();
        router.replace(redirect);
    }

    return { closeSession }
}