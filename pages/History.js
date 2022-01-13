import React, { Fragment } from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';
import { HStack, IconButton, Text, StatusBar, Box, FlatList, View, VStack, Input, Button} from "native-base";
import Icon from 'react-native-vector-icons/Ionicons'
import {
  Dimensions,
  Pressable,
} from 'react-native';

const History = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Finalized'},
    { key: 'second', title: 'Ongoing' },
  ]);

  const HistoryItem = ({ item }) => {
    // state, show/hide
    const [isShow, setShow] = React.useState(false);
  
    let statusBgColor
    let statusTextColor
    let workTimeColor
  
    switch (item.status) {
      case 'Finalized':
        statusBgColor = '#9ccc65'
        statusTextColor = '#33691E'
        workTimeColor = '#8BC34A'
        break;
  
      case 'Stopped':
        statusBgColor = '#EF9A9A'
        statusTextColor = '#B71C1C'
        workTimeColor = '#EF9A9A'
        break;
  
      case 'Running':
        statusBgColor = '#FFF59D'
        statusTextColor = '#FB8C00'
        workTimeColor = '#FFC805'
        break;
    }
  
    return <View padding={4} flex={1} flexDirection='row'>
      <View flex={1} style={{flex: 1}}/>
      <View flex={5} alignItems='center'>
        <Text fontWeight='medium' fontSize='16'>
          {item.title}
        </Text>
        <HStack>
          <Text marginRight={4} fontWeight='normal' fontStyle="normal" fontSize='12'>{item.id}</Text>
          <Text style={{backgroundColor: statusBgColor, borderRadius: 6}} color={statusTextColor} fontWeight='semibold' fontStyle="normal" fontSize='12'>{item.status}</Text>
        </HStack>
        <HStack>
          <VStack alignItems='center'>
            <Text marginRight={4} fontWeight='medium' fontStyle="normal" fontSize='12'>Work Time</Text>
            <Text marginRight={4} color={workTimeColor} fontWeight='bold' fontStyle="normal" fontSize='12'>{item.workTime}</Text>
          </VStack>
          <VStack alignItems='center'>
            <Text marginRight={4} fontWeight='medium' fontStyle="normal" fontSize='12'>Date Start</Text>
            <Text marginRight={4} color='#7EBE42' fontWeight='bold' fontStyle="normal" fontSize='12'>{item.dateStart}</Text>
          </VStack>
          <VStack alignItems='center'>
            <Text fontWeight='medium' fontStyle="normal" fontSize='12'>Date Finalized</Text>
            <Text color='#EF9A9A' fontWeight='bold' fontStyle="normal" fontSize='12'>{item.dateFinalized}</Text>
          </VStack>
        </HStack>
        {isShow && (
          <Fragment>
            <HStack>
              <IconButton icon={<Icon name='md-play-skip-forward-circle-outline' size={40} color='#FFF59D'/>} />
              <IconButton icon={<Icon name='stop-circle-outline' size={40} color='#EF9A9A'/>}/>
              <IconButton icon={<Icon name='ios-checkmark-circle-outline' size={40} color='#9CCC65'/>}/>
            </HStack>
            <HStack alignItems='center'>
              <IconButton icon={<Icon name='ios-eye-outline' size={24} color='#01579B'/>} />
              <Text fontWeight='normal' fontStyle='normal' fontSize='10' color='#01579B'>View Group Member</Text>
            </HStack>
            <Input marginBottom={2} placeholder='Add Employee ID' textAlign='center' borderColor='#C7C7C7' h='36' w='246'/>
            <Button backgroundColor='#01579B' h='36' w='246'>SEARCH</Button>
          </Fragment>
        )}
      </View>
      <View flex={1} alignItems='center' justifyContent='center'>
        <IconButton onPress={() => setShow(!isShow)} icon={<Icon name={isShow ? 'chevron-up' : 'chevron-down'} size={24} color='black'/>} />
      </View>
    </View>
  }
    
  const FirstRoute = () => {
    const data = [
      {
        title: 'FIXING TIRE DAMAGE',
        id: '002312300',
        workTime: '4.20 H',
        dateStart: '21 NOV 2021',
        dateFinalized: '21 NOV 2021',
        status: 'Finalized'
      },
      {
        title: 'DO REPAIR CARGO LIGHT',
        id: '002312410',
        workTime: '3.30 H',
        dateStart: '21 NOV 2021',
        dateFinalized: '21 NOV 2021',
        status: 'Finalized'
      }
    ]
    return <FlatList ItemSeparatorComponent={() => <View style={{height: 0.5, backgroundColor: 'grey'}} />} data={data} flex={1} renderItem={({item}) => <HistoryItem item={item} />} keyExtractor={(item) => item.id}/>;
  }
  
  const SecondRoute = () => {
    const data = [
      {
        title: 'REPAIR WINDOW',
        id: '002312400',
        workTime: '41 M',
        dateStart: '21 NOV 2021',
        dateFinalized: '-',
        status: 'Stopped'
      },
      {
        title: 'DO REPAIR SEAT 21 A',
        id: '002312411',
        workTime: '1D 1.10 H',
        dateStart: '21 NOV 2021',
        dateFinalized: '-',
        status: 'Stopped'
      },
      {
        title: 'DO REPAIR CARGO MACHINE',
        id: '002312410',
        workTime: '2D 2.10 H',
        dateStart: '21 NOV 2021',
        dateFinalized: '-',
        status: 'Running'
      }
    ]
    return <FlatList ItemSeparatorComponent={() => <View style={{height: 0.5, backgroundColor: 'grey'}} />} data={data} flex={1} renderItem={({item}) => <HistoryItem item={item} />} keyExtractor={(item) => item.id}/>;
  }

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });
          const color = index === i ? '#01579B' : '#bcbcbc';
          const borderColor = index === i ? 'blue.900' : 'coolGray.200';

          return (
            <Box
              key={`box-${i}`}
              borderBottomWidth="3"
              borderColor={borderColor}
              flex={1}
              alignItems="center"
              p="3"
              cursor="pointer">
              <Pressable
                onPress={() => {
                  console.log(i);
                  setIndex(i);
                }}>
                <Text fontStyle='normal' fontWeight='semibold' fontSize={18} style={{ color }}>{route.title}</Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  const initialLayout = { width: Dimensions.get('window').width };

  const renderScenes = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScenes}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{ marginTop: StatusBar.currentHeight }}
    />
  )
}

export default History;