/* eslint-disable react-native/no-inline-styles */
import {
  Avatar,
  Box,
  Card,
  FlatList,
  HStack,
  Image,
  ScrollView,
  Text,
  View,
  VStack,
} from 'native-base';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {ChevronUpIcon} from 'react-native-heroicons/outline';
import data from '../lib/data.json';
import CryptoCard from '../components/CryptoCard';

export default class Home extends Component {
  render() {
    const {user, popular_currencies, portfolio} = data;
    return (
      <ScrollView padding={'4'} contentContainerStyle={styles.container}>
        <View
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <View>
            <Text fontSize={'lg'} fontWeight={'semibold'} color={'gray.400'}>
              Welcome
            </Text>
            <Text fontSize={'2xl'} fontWeight={'bold'}>
              {user.name}
            </Text>
          </View>
          <View>
            <Avatar source={{uri: user.avatar_url}} size={'lg'} />
          </View>
        </View>
        <Card borderRadius={'2xl'} backgroundColor={'blue.500'}>
          <VStack space={'4'}>
            <View>
              <Text
                fontSize={'lg'}
                fontWeight={'semibold'}
                color={'indigo.200'}>
                Balance
              </Text>
              <Text fontSize={'2xl'} fontWeight={'bold'} color={'white'}>
                ${user.balance}
              </Text>
            </View>
            <View>
              <Text
                fontSize={'lg'}
                fontWeight={'semibold'}
                color={'indigo.200'}>
                Monthly Profit
              </Text>
              <HStack alignItems={'center'} justifyContent={'space-between'}>
                <Text fontSize={'2xl'} fontWeight={'bold'} color={'white'}>
                  ${user.monthly_profit}
                </Text>
                <HStack
                  alignItems={'center'}
                  space={'1'}
                  backgroundColor={'indigo.400'}
                  padding={'2'}
                  borderRadius={'full'}>
                  <ChevronUpIcon size={16} color={'white'} />
                  <Text fontSize={'lg'} fontWeight={'bold'} color={'white'}>
                    +{user.profit_percentage}%
                  </Text>
                </HStack>
              </HStack>
            </View>
          </VStack>
        </Card>
        <VStack>
          <Text fontSize={'xl'} fontWeight={'bold'} color={'black'}>
            My Portfolio
          </Text>
          <FlatList
            data={portfolio}
            horizontal
            renderItem={({item}) => (
              <Card backgroundColor={'white'} borderRadius={'2xl'}>
                <HStack alignItems={'center'} space={'4'}>
                  <Image
                    source={{uri: item.image_url}}
                    size={'50px'}
                    alt={item.symbol}
                  />
                  <Text fontSize={'xl'} fontWeight={'semibold'}>
                    {item.symbol}
                  </Text>
                </HStack>
                <Box paddingTop={'4'}>
                  <Text fontSize={'lg'} fontWeight={'bold'} color={'gray.400'}>
                    Portfolio
                  </Text>
                  <HStack>
                    <Text
                      fontSize={'2xl'}
                      fontWeight={'extrabold'}
                      color={'black'}>
                      ${item.portfolio_value}
                    </Text>
                    <HStack alignItems={'center'} space={'1'} marginLeft={'10'}>
                      <ChevronUpIcon size={16} color={'white'} />
                      <Text
                        fontSize={'lg'}
                        fontWeight={'bold'}
                        color={'indigo.400'}>
                        +{item.percentage_change}%
                      </Text>
                    </HStack>
                  </HStack>
                </Box>
              </Card>
            )}
            contentContainerStyle={styles.contentContainerStyle}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        </VStack>
        <VStack>
          <Text fontSize={'xl'} fontWeight={'bold'} color={'black'}>
            Popular Currencies
          </Text>
          <FlatList
            data={popular_currencies}
            renderItem={({item}) => <CryptoCard crypto={item} />}
            contentContainerStyle={styles.contentContainerStyle}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        </VStack>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    paddingBottom: 100,
  },
  contentContainerStyle: {
    rowGap: 10,
    columnGap: 10,
    padding: 10,
  },
});
