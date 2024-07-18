import {
  Card,
  Text,
  CardBody,
  CardHeader,
  Heading,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { CountryType } from "../Countries";

export const CountryCard: React.FC<{ country: CountryType }> = ({
  country,
}) => {
  return (
    <LinkBox as="article" cursor="pointer">
      <Card cursor="pointer">
        <CardHeader>
          <Heading size="md">
            <LinkOverlay href={country.maps.googleMaps} isExternal>
              {country.name.official}
            </LinkOverlay>
          </Heading>
        </CardHeader>

        <CardBody>
          <Text>{country.capital}</Text>
          <Text>Population: {country.population}</Text>
          <Text>{country.maps.googleMaps}</Text>
        </CardBody>
      </Card>
    </LinkBox>
  );
};
