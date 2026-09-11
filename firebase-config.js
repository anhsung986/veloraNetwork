// Import các hàm cần thiết từ Firebase SDK (Phiên bản v10 CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { 
    getDatabase, 
    ref, 
    set, 
    get, 
    child 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// Thông tin cấu hình Firebase của Velora Network
const firebaseConfig = {
  apiKey: "AIzaSyC_3QIGVHZX_D3qv3A9A6c4Bk_-Qll3uPA",
  authDomain: "veloranetwork-9f856.firebaseapp.com",
  databaseURL: "https://veloranetwork-9f856-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "veloranetwork-9f856",
  storageBucket: "veloranetwork-9f856.firebasestorage.app",
  messagingSenderId: "706154613824",
  appId: "1:706154613824:web:ef724b288e6210dcf123a5",
  measurementId: "G-BB86VE0JDY"
};

// Khởi tạo ứng dụng Firebase
const app = initializeApp(firebaseConfig);

// Khởi tạo các dịch vụ
const auth = getAuth(app);
const db = getDatabase(app);
const googleProvider = new GoogleAuthProvider();

// Xuất (Export) các dịch vụ và hàm ra ngoài để dùng trong login.html & settings.html
export { 
    auth, 
    db, 
    googleProvider, 
    signInWithPopup, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    ref,
    set,
    get,
    child
};

