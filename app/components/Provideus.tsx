"use client";
import { ReactNode } from "react";
import { CartProvider } from "use-shopping-cart";

export default function ProvideUs({ children }: { children: ReactNode }) {
    return(
        <CartProvider
            mode="payment"
            cartMode="client-only"
            stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
            successUrl="https://e-commerce-app-omega-ten.vercel.app/stripe/success"
            cancelUrl="https://e-commerce-app-omega-ten.vercel.app/stripe/error"
            currency="INR"
            billingAddressCollection={true}
            shouldPersist={true}
            language="en-US"
        >
            {children}
        </CartProvider>
    )
}