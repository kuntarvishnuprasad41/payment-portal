"use client";

/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/CBD2lr12FGg
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { IBM_Plex_Sans } from 'next/font/google'

ibm_plex_sans({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export function Payments() {
  const searchParams = useSearchParams();
  const [paymentState, setPaymentState] = useState(false);

  const amount = searchParams.get("amount");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background dark:bg-[#1a1b1e]">
      <Card className="w-full max-w-md p-6 md:p-8 bg-background dark:bg-[#1a1b1e] dark:border-[#2c2d30]">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CreditCardIcon className="h-6 w-6 text-primary dark:text-primary-dark" />
              <h1 className="text-2xl font-bold text-foreground dark:text-foreground-dark">
                Payment
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
          <div className="grid gap-4">
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
              <div>
                <Label
                  htmlFor="payment-method"
                  className="text-foreground dark:text-foreground-dark"
                >
                  Payment Method
                </Label>

                {paymentState ? (
                  <div className="flex justify-center">
                    <Image
                      src={
                        "https://api.vishnuprasadkuntar.me/uploads/1722862475727_me.jpg"
                      }
                      width={350}
                      height={350}
                      alt={""}
                    />
                  </div>
                ) : (
                  <RadioGroup
                    defaultValue="upi"
                    className="grid grid-cols-3 gap-4 mt-2"
                  >
                    <div>
                      <RadioGroupItem
                        defaultValue="upi"
                        value="upi"
                        id="upi"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="upi"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted dark:border-muted-dark bg-popover dark:bg-[#2c2d30] p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary dark:peer-data-[state=checked]:border-primary-dark [&:has([data-state=checked])]:border-primary dark:[&:has([data-state=checked])]:border-primary-dark"
                      >
                        <WalletCardsIcon className="mb-3 h-6 w-6 text-foreground dark:text-foreground-dark" />
                        UPI
                      </Label>
                    </div>
                  </RadioGroup>
                )}
              </div>
            </div>
          </div>
        </CardContent>
        {paymentState ? (
          <>
            <CardFooter>
              <Button
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-primary-dark dark:text-primary-foreground-dark dark:hover:bg-primary-dark/90"
                onClick={() => {
                  setPaymentState((state) => !state);
                }}
              >
                Upload payment Proof
              </Button>
            </CardFooter>
          </>
        ) : (
          <>
            {" "}
            <CardFooter>
              <Button
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-primary-dark dark:text-primary-foreground-dark dark:hover:bg-primary-dark/90"
                onClick={() => {
                  setPaymentState((state) => !state);
                }}
              >
                Pay Now
              </Button>
            </CardFooter>
          </>
        )}
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

function DollarSignIcon(props) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function WalletCardsIcon(props) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
      <path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21" />
    </svg>
  );
}
