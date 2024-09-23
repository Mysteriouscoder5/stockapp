import React, {Component} from 'react';
import {Avatar, Card, HStack, View, Text} from 'native-base';
import {ChevronUpIcon} from 'react-native-heroicons/outline';
type Crypto = {
  name: string;
  symbol: string;
  percentage_change: number;
  price_usd: number;
  image_url: string;
};
type Props = {
  crypto: Crypto;
};
export class CryptoCard extends Component<Props> {
  render() {
    const {crypto} = this.props;
    return (
      <Card backgroundColor={'white'} borderRadius={'2xl'}>
        <HStack alignItems={'center'} justifyContent={'space-between'}>
          <HStack alignItems={'center'} space={'4'}>
            <Avatar
              source={{uri: crypto.image_url}}
              size={'50px'}
              backgroundColor={'white'}
            />
            <View>
              <Text fontSize={'lg'} fontWeight={'semibold'}>
                {crypto.name}
              </Text>
              <HStack alignItems={'center'} space={'2'}>
                <Text
                  fontSize={'md'}
                  fontWeight={'semibold'}
                  color={'gray.400'}>
                  {crypto.symbol}
                </Text>
                <HStack alignItems={'center'} space={'1'}>
                  <ChevronUpIcon size={16} color={'white'} />
                  <Text
                    fontSize={'md'}
                    fontWeight={'bold'}
                    color={'indigo.400'}>
                    +{crypto.percentage_change}%
                  </Text>
                </HStack>
              </HStack>
            </View>
          </HStack>
          <View>
            <Text fontSize={'lg'} fontWeight={'bold'} color={'black'}>
              ${crypto.price_usd}
            </Text>
          </View>
        </HStack>
      </Card>
    );
  }
}

export default CryptoCard;
