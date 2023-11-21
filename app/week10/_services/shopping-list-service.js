import { CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL } from "next/dist/shared/lib/constants";
import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function addItem(userId, itemObj) {
    try {
        let collectionReference = collection(db, "users", userId, "items");
        const addedItemPromise = await addDoc(collectionReference, itemObj);
        console.log(addedItemPromise.id);
    } catch (error) {
        console.error(error);
    }
}

export async function getItems(userId, updateItemList){
    try {
        let collectionReference = collection(db, "users", userId, "items");
        const getItemsPromise = await getDocs(collectionReference);
        let dataList = [];
        getItemsPromise.forEach((doc) => {
            let thisItem = {
                id: doc.id,
                ...doc.data()
            }
            dataList.push(thisItem);
        })
        updateItemList(dataList);
    } catch (error) {
        console.error(error);
    }
}