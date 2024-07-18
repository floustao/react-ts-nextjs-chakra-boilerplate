import { ELanguages, useLanguage } from "@/contexts/LanguageProvider";
import { Button, HStack } from "@chakra-ui/react";

export function LanguagePicker() {
  const { setLanguage } = useLanguage();

  return (
    <HStack className="btn-group">
      {Object.values(ELanguages).map((lang) => (
        <Button key={lang} onClick={() => setLanguage(lang)}>
          {lang}
        </Button>
      ))}
    </HStack>
  );
}
