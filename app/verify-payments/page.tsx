"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VZtc2aM1foj
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function PaymentProof() {
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount");
  const [username, setUsername] = useState("");
  const [utrNumber, setUtrNumber] = useState("");
  const [paymentProof, setPaymentProof] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("utrNumber", utrNumber);
    formData.append("amount", amount);
    formData.append("paymentProof", paymentProof);

    const response = await fetch("https://api.vishnuprasadkuntar.me/payments", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("Payment proof submitted successfully!");
    } else {
      alert("Failed to submit payment proof.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background dark:bg-[#1a1b1e]">
      <Card className="w-full max-w-md p-6 md:p-8 bg-background dark:bg-[#1a1b1e] dark:border-[#2c2d30]">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CreditCardIcon className="h-6 w-6 text-primary dark:text-primary-dark" />
              <h1 className="text-2xl font-bold text-foreground dark:text-foreground-dark">
                Payment Proof
              </h1>
            </div>
            <Link
              href="#"
              className="text-primary dark:text-primary-dark hover:underline"
              prefetch={false}
            >
              Need help?
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label
                htmlFor="username"
                className="text-foreground dark:text-foreground-dark"
              >
                Username
              </Label>
              <Input
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-background dark:bg-[#2c2d30] text-foreground dark:text-foreground-dark"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground dark:text-muted-foreground-dark">
                  Order Total
                </span>
                <span className="font-medium text-foreground dark:text-foreground-dark">
                  INR {amount}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground dark:text-muted-foreground-dark">
                  Item Description
                </span>
                <span className="text-foreground dark:text-foreground-dark"></span>
              </div>
              <Separator className="border-muted dark:border-muted-dark" />
              <div className="flex items-center justify-between font-medium text-foreground dark:text-foreground-dark">
                <span>Total</span>
                <span>INR {amount}</span>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label
                  htmlFor="utr-number"
                  className="text-foreground dark:text-foreground-dark"
                >
                  UTR Reference Number
                </Label>
                <Input
                  id="utr-number"
                  placeholder="Enter UTR reference number"
                  value={utrNumber}
                  onChange={(e) => setUtrNumber(e.target.value)}
                  className="bg-background dark:bg-[#2c2d30] text-foreground dark:text-foreground-dark"
                />
              </div>
              <div className="grid gap-2">
                <Label
                  htmlFor="payment-proof"
                  className="text-foreground dark:text-foreground-dark"
                >
                  Payment Proof
                </Label>
                <Input
                  id="payment-proof"
                  type="file"
                  onChange={(e) => setPaymentProof(e.target.files[0])}
                  className="bg-background dark:bg-[#2c2d30] text-foreground dark:text-foreground-dark"
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-primary-dark dark:text-primary-foreground-dark dark:hover:bg-primary-dark/90"
            >
              Submit Proof
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

function CreditCardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}
