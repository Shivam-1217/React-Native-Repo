import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import RNDateTimePicker from '@react-native-community/datetimepicker';

const Datepicker = ({ width, height, bg, label, color, top, mode }) => {
  const [open, setOpen] = useState(false);
  const [birthDate, setBirthDate] = useState(new Date(1989, 10, 1)); 
  const [selectedTime, setSelectedTime] = useState("16:30"); 

  useEffect(() => {
    const timeParts = selectedTime.split(':');
    const hours = parseInt(timeParts[0], 10);
    const minutes = parseInt(timeParts[1], 10);
    const newBirthDate = new Date(birthDate);
    newBirthDate.setHours(hours, minutes);
    setBirthDate(newBirthDate);
  }, [selectedTime]);

  const handleChange = (event, selectedDate) => {
    if (event.type === 'set') {
      setBirthDate(selectedDate);
    }
    setOpen(false);
  };

  const formatDate = (date) => {
    const options = {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    };
    return date.toLocaleDateString('en-GB', options);
  };

  const formatTime = (time) => {
    const options = { hour: '2-digit', minute: '2-digit' };
    return time.toLocaleTimeString('en-US', options);
  };

  return (
    <View style={{ marginTop: top }}>
      <Text style={[styles.label, { color: color }]}>{label}</Text>
      <TouchableOpacity
        style={[styles.input, { width: width, height: height, backgroundColor: bg }]}
        onPress={() => setOpen(true)}
      >
        <Text style={{ color: color, marginTop: '3.5%', fontWeight: '600' }}>
          {mode === 'time' ? formatTime(birthDate) : formatDate(birthDate)}
        </Text>
      </TouchableOpacity>

      {open && (
        <RNDateTimePicker
          mode={mode}
          value={birthDate}
          maximumDate={new Date()}
          onChange={handleChange}
        />
      )}
    </View>
  );
};

export default Datepicker;

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#808e9b',
    borderStyle: 'dashed',
    color: '#010',
    fontSize: height * 0.018,
    fontWeight: '600'
  },
  label: {
    fontSize: height * 0.018,
    paddingBottom: 0
  }
});
