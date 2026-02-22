# Note Manager – Next.js Application

A high-performance personal note management system built with **Next.js 16 (App Router)** and **React 19**. This project focuses on seamless data synchronization, robust state management, and a smooth user experience.

## 🚀 Key Features

* **Full CRUD Functionality**: Create, read, update, and delete notes with instant UI feedback.
* **Advanced Data Fetching**: Powered by **TanStack Query v5** for caching, background updates, and optimistic UI.
* **Authentication**: Secure session-based auth using cookies and Axios.
* **Dynamic Search & Filtering**: Optimized search using **debounce** to reduce API load and pagination for performance.
* **Global State**: Lightweight state management via **Zustand**.

## 🛠 Tech Stack

| Category | Technology |
| --- | --- |
| **Framework** | Next.js 16 (App Router), React 19 |
| **Styling** | CSS Modules |
| **Data Fetching** | TanStack Query v5, Axios |
| **State Management** | Zustand |
| **Utilities** | React Hot Toast, React Paginate, Use-Debounce |

## 🏗 Architectural Highlights

### **1. Secure Server-Side Integration**

The project uses a dual API approach:

* **`clientApi.ts`**: For client-side interactions, utilizing Axios for global error handling and toast notifications.
* **`serverApi.ts`**: For server-side session validation to protect routes and fetch data before the page renders.

### **2. Efficient State Synchronization**

By integrating **TanStack Query**, the app minimizes network requests through smart caching. It handles complex server states (loading, error, success) globally via a centralized `TanStackProvider`.

### **3. Optimized UX**

* **Scroll Management**: Custom modal implementation that locks body scroll to prevent "double scroll" issues.
* **Navigation**: Integrated `nextjs-toploader` to provide visual feedback during route changes.
