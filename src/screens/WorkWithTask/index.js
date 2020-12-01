import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import connector from './connector';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import { windowHeight, windowWidth } from '../../constants/index';

import { addTask, updateTask, removeTask } from '../../api/tasksApi';

import styles from './styles';

const WorkWithTask = ({ navigation, token, task, clearTask, route }) => {
  const [title, updateTitle] = useState('');
  const [dueBy, updateDueBy] = useState(new Date());
  const [priority, updatePriority] = useState('');
  const [visibleDatePicker, updateVisible] = useState(false);
  const { action } = route.params;
  useFocusEffect(
    useCallback(() => {
      if (task) {
        const { title, dueBy, priority } = task;
        updateTitle(title);
        updatePriority(priority);
        updateDueBy(new Date(dueBy));
      }
      // return () => clearTask();
    }, [navigation, task])
  );
  const createTask = () => {
    addTask({ title, dueBy: Math.round(+new Date(dueBy) / 1000), priority }, token, navigation);
  };

  const updateTaskRequest = () => {
    updateTask({ title, dueBy: Math.round(+new Date(dueBy) / 1000), priority }, task.id, token, navigation);
  };

  const deleteTask = () => {
    removeTask({ title, dueBy: Math.round(+new Date(dueBy) / 1000), priority }, task.id, token, navigation);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{ marginTop: 20 }}>-----------------Title----------------</Text>
        <FormInput
          value={title}
          placeholderText="Title"
          onChangeText={(text) => updateTitle(text)}
          autoCapitalize="none"
          multiline={true}
          numberOfLines={3}
          height={75}
        />
        <Text style={{ marginTop: 20 }}>----------------Due date--------------</Text>
        <View style={styles.row}>
          <Text style={styles.text}>{new Date(dueBy).toLocaleString()}</Text>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => updateVisible(!visibleDatePicker)}>
            <Text style={styles.buttonText}>{visibleDatePicker ? 'hide' : 'show'}</Text>
          </TouchableOpacity>
        </View>
        {visibleDatePicker && <DatePicker date={dueBy} onDateChange={updateDueBy} />}
        <Text style={{ marginTop: 20 }}>-----------------Priority---------------</Text>
        <View style={styles.row}>
          {enumPriority.map((el, index) => {
            return (
              <TouchableOpacity
                style={[styles.buttonContainer, { borderWidth: 1, borderColor: el === priority ? 'red' : 'gray' }]}
                onPress={() => updatePriority(el)}
                key={index.toString()}
              >
                <Text style={[styles.buttonText, { marginHorizontal: 15 }]}>{el}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <Text style={{ marginTop: 50 }} />
        <FormButton
          buttonTitle={action}
          onPress={() => {
            action === 'create' ? createTask() : updateTaskRequest();
          }}
        />
        {action === 'update' && (
          <>
            <Text style={{ marginTop: 120 }} />
            <FormButton
              buttonTitle={'delete'}
              onPress={() => {
                deleteTask();
              }}
            />
          </>
        )}
      </View>
    </ScrollView>
  );
};

const enumPriority = ['Low', 'Normal', 'High'];

export default connector(WorkWithTask);
