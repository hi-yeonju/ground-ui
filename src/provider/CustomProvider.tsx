"use client"

import Header from "@/components/layout/Header";
import Layout from "@/components/layout/Layout";
import Nav from "@/components/layout/Nav";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

const CustomProvider = ({ session, children }: { session:any, children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            <Layout>
                <Header />
                <Nav />
                <main style={{ minHeight: '100vh' }}>
                    {children}
                </main>

            </Layout>
        </Provider>
    );
}

export default CustomProvider;