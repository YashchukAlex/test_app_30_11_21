import React, { useCallback, useState, useEffect, memo } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, TouchableOpacity, FlatList, RefreshControl } from 'react-native';
import connector from './connector';
import FormButton from '../../components/FormButton';
import { Dropdown } from 'react-native-material-dropdown';

import { getTasks, getTaskById } from '../../api/tasksApi';

import styles from './styles';

const Tasks = ({ navigation, token, listTasks, clearAllTasks, loader }) => {
  const [filter, updateFilter] = useState(enumFilters[0]);
  const [sort, updateSort] = useState(enumSorted[0]);
  useFocusEffect(
    useCallback(() => {
      getTasks({ page: 1, sort: `${filter.value} ${sort.value}` }, token);
      return () => handleReset();
    }, [navigation])
  );

  useEffect(() => {
    handleUpdateFilter();
  }, [filter, sort]);

  const handleRequest = (calback) => {
    const { count, current, limit } = listTasks.meta;
    if (listTasks && listTasks.tasks.length < count) {
      getTasks({ page: current + 1, sort: `${filter.value} ${sort.value}` }, token);
    }
  };

  const handleReset = () => {
    clearAllTasks();
    updateSort(enumSorted[0]);
    updateFilter(enumFilters[0]);
  };

  const handleUpdateFilter = () => {
    clearAllTasks();
    getTasks({ page: 1, sort: `${filter.value} ${sort.value}` }, token);
  };

  const handleRefresh = () => {
    clearAllTasks();
    getTasks({ page: 1, sort: `${filter.value} ${sort.value}` }, token);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.row]}>
        <Dropdown
          label="Filter"
          data={enumFilters}
          containerStyle={{ width: 100 }}
          value={filter.value}
          onChangeText={(message, index, data) => {
            updateFilter(enumFilters[index]);
          }}
        />
        <Dropdown
          label="Sorted"
          data={enumSorted}
          containerStyle={{ width: 100 }}
          value={sort.value}
          onChangeText={(message, index, data) => {
            updateSort(enumSorted[index]);
          }}
        />
      </View>
      <FlatList
        data={listTasks ? listTasks.tasks : []}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              getTaskById(item.id, token, () => navigation.navigate('WorkWithTask', { action: 'update' }));
            }}
          >
            <View style={{ width: '80%', height: '100%', justifyContent: 'space-around' }}>
              <Text style={[styles.buttonText, { fontWeight: 'bold', fontSize: 14 }]} numberOfLines={2}>
                {item.title}
              </Text>
              <Text style={styles.buttonText}>{new Date(item.dueBy).toLocaleString()}</Text>
            </View>
            <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={styles.buttonText}>{item.priority || '-'}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        refreshControl={
          <RefreshControl
            refreshing={loader && !listTasks ? true : false}
            onRefresh={() => {
              handleRefresh();
            }}
          />
        }
        onEndReached={!loader && handleRequest}
        showsHorizontalScrollIndicator={false}
      />
      <FormButton buttonTitle="Create new task" onPress={() => navigation.navigate('WorkWithTask', { action: 'create' })} />
    </View>
  );
};

const enumFilters = [{ value: 'title' }, { value: 'dueBy' }, { value: 'priority' }];
const enumSorted = [{ value: 'asc' }, { value: 'desc' }];

export default memo(connector(Tasks));
