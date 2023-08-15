import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyADvVnaI2dUynIFlpNhatSJhXlZITLTfmk",
    authDomain: "entregafinalsernabotero.firebaseapp.com",
    projectId: "entregafinalsernabotero",
    storageBucket: "entregafinalsernabotero.appspot.com",
    messagingSenderId: "59379107180",
    appId: "1:59379107180:web:92bd1ee1b9242bf30b1f49"
  };

const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);

async function getData() {
  const productsRef = collection(db, "products");
  const documentsSnapshot = await getDocs(productsRef);
  const documents = documentsSnapshot.docs;
  const docsData = documents.map(
    (item) => {
      return { ...item.data(), id: item.id };
    }
  );
  return docsData;
}

async function getProductData(id) {
  const docRef = doc(db, "products", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    return { ...docSnapshot.data(), id: docSnapshot.id };
  } else {
    throw new Error("No se encuentra el producto.");
  }
}

async function createOrder(orderData) {
  console.log("Creating order with data:", orderData);
  const collectionRef = collection(db, "orders");
  const docCreated = await addDoc(collectionRef, orderData);
  console.log("Order created with ID:", docCreated.id);
  return docCreated.id;
}

async function getOrder(id) {
  console.log("getOrder is called with id:", id);
  const docRef = doc(db, "orders", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    console.log("Document data:", docSnapshot.data());
    return { ...docSnapshot.data(), id: docSnapshot.id };
  } else {
    console.error("Document not found");
    throw new Error("No se encuentra el pedido.");
  }
}

export { getData, getOrder, getProductData, createOrder};