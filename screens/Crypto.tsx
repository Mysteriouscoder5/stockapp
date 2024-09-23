import React, {Component} from 'react';
import {Button, FlatList, HStack, Text, View} from 'native-base';
import CryptoCard from '../components/CryptoCard';
import data from '../lib/data.json';
import {StyleSheet} from 'react-native';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';

export default class Crypto extends Component {
  render() {
    const {popular_currencies} = data;

    return (
      <View>
        <HStack
          padding={'3'}
          backgroundColor={'white'}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <Text color={'green.800'} fontSize={'xl'} fontWeight={'bold'}>
            Market is up 3.68% up today
          </Text>
          <MagnifyingGlassIcon size={24} color={'black'} />
        </HStack>
        <HStack backgroundColor={'white'} alignItems={'center'}>
          <Button variant={'ghost'} flex={1}>
            <Text fontWeight={'medium'} color={'gray.500'}>
              All
            </Text>
          </Button>
          <Button variant={'ghost'} flex={1}>
            <Text fontWeight={'medium'} color={'gray.500'}>
              Watch List
            </Text>
          </Button>
          <Button variant={'ghost'} flex={1}>
            <Text fontWeight={'medium'} color={'gray.500'}>
              Top Gainers
            </Text>
          </Button>
          <Button variant={'ghost'} flex={1}>
            <Text fontWeight={'medium'} color={'gray.500'}>
              Top Losers
            </Text>
          </Button>
        </HStack>
        <FlatList
          data={popular_currencies}
          renderItem={({item}) => <CryptoCard crypto={item} />}
          contentContainerStyle={styles.contentContainerStyle}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
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
    paddingBottom: 200,
  },
  ListHeaderComponentStyle: {
    backgroundColor: 'white',
  },
});
