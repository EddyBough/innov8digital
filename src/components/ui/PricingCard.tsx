import Image from "next/image";
import React from "react";
import { Button } from "./button";

export type Feature = {
  text: string;
  enabled?: boolean;
};

export type PricingCardProps = {
  title: string;
  subtitle?: string;
  price: string | number;
  currency?: string;
  features: Feature[];
  buttonText?: string;
  buttonClassName?: string;
  className?: string;
  featuresContainerClassName?: string;
  isMonthly?: boolean;
  showStartingFrom?: boolean;
  onButtonClick?: () => void;
};

const PricingCard = ({
  title,
  subtitle,
  price,
  currency = "€",
  features,
  buttonText = "Devis gratuit",
  buttonClassName = "",
  className = "",
  featuresContainerClassName = "",
  isMonthly = false,
  showStartingFrom = true,
  onButtonClick,
}: PricingCardProps) => {
  return (
    <div className={`w-80 md:w-72 ${className}`}>
      <div className="rounded-[36px] shadow-xl bg-white px-5 py-8 h-full flex flex-col">
        <div className="mb-4">
          <h1 className="text-center text-2xl font-bold text-black">{title}</h1>
          <div className="h-16 flex items-center justify-center">
            {subtitle && (
              <h3 className="mt-2 text-center text-sm font-normal text-gray-800">
                <p>{subtitle}</p>
              </h3>
            )}
          </div>
          {showStartingFrom && (
            <p className="my-2 m-auto text-center">A partir de</p>
          )}
        </div>

        <div className="mb-4">
          <div className="flex flex-col items-center text-black">
            <div className="flex items-start">
              <div className="text-5xl font-medium">{price}</div>
              {typeof price === "number" && (
                <div className="ml-2 flex items-start">
                  <p className="text-lg font-bold">{currency}</p>
                  {isMonthly && (
                    <span className="text-sm font-medium text-gray-600 ml-1 mt-1">
                      /mois
                    </span>
                  )}
                </div>
              )}
            </div>
            <p className="mt-2 text-sm text-gray-600">
              prix indicatif, devis gratuit
            </p>
          </div>
        </div>

        <div className="flex flex-col min-h-0 flex-grow">
          <div className="mb-2">
            <p>Cette offre comprends :</p>
          </div>
          <ul
            className={`grid gap-2 overflow-y-auto ${featuresContainerClassName}`}
          >
            {features.map((feature, index) => (
              <li
                key={index}
                className={`flex items-start gap-2 ${
                  feature.enabled === false ? "text-gray-400" : "text-black"
                }`}
              >
                <div className="flex-shrink-0 mt-0 my-3">
                  <Image
                    src={
                      feature.enabled === false
                        ? "/img/cross.svg"
                        : "/img/check.svg"
                    }
                    width={20}
                    height={20}
                    alt={feature.enabled === false ? "cross" : "check"}
                  />
                </div>
                <span className="text-sm leading-tight">{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <Button
            onClick={onButtonClick}
            className={`w-full rounded-lg bg-black px-3 py-2 text-base font-medium text-white hover:bg-gray-800 ${buttonClassName}`}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
