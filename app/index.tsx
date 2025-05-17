import { Button, Text, View } from "react-native";
import { useRouter } from 'expo-router';
import { saveItem,getItem,deleteItem } from "./utils/storage";
import { use, useEffect, useState } from "react";
import LoadingSplash from "./components/LoadingSplash";
export default function Index() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  // checking the status of the user If  loged in or not
  useEffect(() => {
    const checkUser = async () => {
      const token = await getItem('token');
      if (!token) {
        setIsLoading(false);
        router.push('/login');
      } else
      console.log(token);
    }
    checkUser();
  }, []);
  return (
    <>
    <View
      className="bg-slate-400"
    >
      <LoadingSplash />
    </View>
    </>
  );
}
