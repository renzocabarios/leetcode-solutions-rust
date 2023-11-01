// utils/setRouter.js
import { useTodoStore } from "@/states/";
import { useRouter } from "next/router";

const setRouter = () => {
  const router = useRouter();
  useTodoStore.setState({ router });
};

export default setRouter;
