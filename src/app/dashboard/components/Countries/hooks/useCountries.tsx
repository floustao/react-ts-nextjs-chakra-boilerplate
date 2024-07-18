import { useLanguage, ELanguages } from "@/contexts/LanguageProvider";
import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { CountryType } from "../Countries";

const BASE_URL = "https://restcountries.com/v3.1";

export const useCountries = () => {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { language } = useLanguage();

  const fetchCountries = async (language?: ELanguages) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${BASE_URL}${
          language ? `/lang/${language}` : "/all"
        }?fields=name,capital,population,maps`
      );
      setCountries(response.data);
    } catch (error) {
      setError((error as AxiosError).message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries(language);
  }, [language]);

  return { countries, error, isLoading };
};
