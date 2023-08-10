// Firebase
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  where,
  query,
  addDoc,
  setDoc,
  writeBatch
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

// 2 Implementar async function getData()

async function getData() {
  const productsRef = collection(db, "products");
  const documentsSnapshot = await getDocs(productsRef);
  const documents = documentsSnapshot.docs;
  const docsData = documents.map(
    (item) => {
      return { ...item.data(), id: item.id };
    }
    /* {let productFullData = item.data();
    productFullData.id = item.id;
    return productFullData; }*/
  );
  return docsData;
}

//  3.Implementar getProductData
async function getProductData(id) {
  const docRef = doc(db, "products", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    return { ...docSnapshot.data(), id: docSnapshot.id };
  } else {
    throw new Error("No encontramos ese producto.");
  }
}

// * 4 Implementar getCategoryData
async function getCategoryData() {
  const productsRef = collection(db, "products");
  // cambiamos esto
  const q = query(productsRef, where("price", ">=", 200));
  const documentsSnapshot = await getDocs(q);

  const documents = documentsSnapshot.docs;

  return documents.map((item) => ({ ...item.data(), id: item.id }));
}

async function createOrder(orderData){
  const collectionRef = collection(db, "orders")
  const docCreated = await addDoc(collectionRef, orderData)

  return(docCreated.id)
}


async function getOrder(id){
  const docRef = doc(db, "orders", id);
  const docSnapshot = await getDoc(docRef);

  return { ...docSnapshot.data(), id: docSnapshot.id };
}


async function _exportProducts(){
  const productos = [
    {
        title: "Anaray",
        litledescription: "Fruit Beer",
        id: 1,
        stock: 60,
        description: "Cerveza de trigo con una adición de duraznos naturales de Boyacá con un aroma característico a durazno y sutil sabor a frutas cítricas",
        img: "./assets/3.jpg",
        price: 10000,
      },
      {
        title: "Benkos",
        litledescription: "Stout",
        id: 2,
        stock: 45,
        description: "Cerveza negra con adiciones de malta de cebada tostada, trigo y avena con aromas a café y chocolate y un delicioso sabor a capuchino suave",
        img: "./assets/5.png",
        price: 9000,
      },
      {
        title: "Rooke",
        litledescription: "Scottish Export",
        id: 3,
        stock: 70,
        description: "Cerveza roja con sabor y aroma característicos a malta, con ligeros toques acaramelados y de frutos rojos, que proporcionan un final seco",
        img: "./assets/6.png",
        price: 10000,
      },
      {
        title: "Valerosa",
        litledescription: "Blonde Ale",
        id: 4,
        stock: 100,
        description: "Ganadora de 5 medallas de oro a nivel nacional y 2 reconocimientos intl. Cerveza rubia con aromas frutales a manzanas verdes y cascara de naranja",
        img: "./assets/7.png",
        price: 12000,
      },
  ];

  // for ... of
  // productos.forEach( item => {})
 /*  for(let item of productos){
    console.log(item)
    const docRef = doc(db, "products", String(item.id))
    const docCreated = await setDoc(docRef, item);
    console.log("Doc created with id:", docCreated.id)
  } */

  for(let item of productos){   
    const collectionRef = collection(db, "products")
    const docCreated = await addDoc(collectionRef, item);
    console.log("Doc created with id:", docCreated.id)
  }
}


async function _exportProductsWithBatch(){
  const productos = [
    {
        title: "Anaray",
        litledescription: "Fruit Beer",
        id: 1,
        stock: 60,
        description: "Cerveza de trigo con una adición de duraznos naturales de Boyacá con un aroma característico a durazno y sutil sabor a frutas cítricas",
        img: "./assets/3.jpg",
        price: 10000,
      },
      {
        title: "Benkos",
        litledescription: "Stout",
        id: 2,
        stock: 45,
        description: "Cerveza negra con adiciones de malta de cebada tostada, trigo y avena con aromas a café y chocolate y un delicioso sabor a capuchino suave",
        img: "./assets/5.png",
        price: 9000,
      },
      {
        title: "Rooke",
        litledescription: "Scottish Export",
        id: 3,
        stock: 70,
        description: "Cerveza roja con sabor y aroma característicos a malta, con ligeros toques acaramelados y de frutos rojos, que proporcionan un final seco",
        img: "./assets/6.png",
        price: 10000,
      },
      {
        title: "Valerosa",
        litledescription: "Blonde Ale",
        id: 4,
        stock: 100,
        description: "Ganadora de 5 medallas de oro a nivel nacional y 2 reconocimientos intl. Cerveza rubia con aromas frutales a manzanas verdes y cascara de naranja",
        img: "./assets/7.png",
        price: 12000,
      },
  ];

  const batch = writeBatch(db); 

  productos.forEach( producto => {
    const newId = producto.id
    delete producto.id;
    const newDoc = doc(db, "products", `1${newId}`)
    batch.set(newDoc, producto);    
  })

  const data = await batch.commit()  
  console.log("Listo!", data)
}

export { getData, getOrder, getProductData, getCategoryData, createOrder, _exportProducts, _exportProductsWithBatch};