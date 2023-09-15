import React,{useState} from "react";
import { View } from "react-native";
import styles from "./style";
import BackgroundGradient from '../../../../componentes/BackgroundGradient'

import {Agenda, DateData, AgendaEntry, AgendaSchedule} from 'react-native-calendars';



export default function LayoutAgendaVeiculo(){
    const [items, setItems] = useState({});

  const generateTimeSlots = (startTime, endTime, interval) => {
    const timeSlots = [];
    let currentTime = startTime;

    while (currentTime <= endTime) {
      timeSlots.push(currentTime);
      currentTime = incrementTime(currentTime, interval);
    }

    return timeSlots;
  };

  const incrementTime = (time, interval) => {
    const [hours, minutes] = time.split(':');
    const currentHours = parseInt(hours, 10);
    const currentMinutes = parseInt(minutes, 10);

    let newHours = currentHours;
    let newMinutes = currentMinutes + interval;

    if (newMinutes >= 60) {
      newHours += 1;
      newMinutes -= 60;
    }

    return `${padZero(newHours)}:${padZero(newMinutes)}`;
  };

  const padZero = (number) => {
    return number.toString().padStart(2, '0');
  };

  const startTime = '09:00';
  const endTime = '18:00';
  const interval = 60; // Intervalo de tempo em minutos (por exemplo, 60 para intervalo de 1 hora)

  const handleDayPress = (day) => {
    const selectedDay = day.dateString;
    const timeSlots = generateTimeSlots(startTime, endTime, interval);

    const events = timeSlots.map((time) => ({
      time,
      description: 'Horário disponível',
    }));

    setItems({ [selectedDay]: events });
  };
    const config = {
        menu: {
            CONTAINER: 'menu',
            CALENDARS: 'calendars_btn',
            CALENDAR_LIST: 'calendar_list_btn',
            HORIZONTAL_LIST: 'horizontal_list_btn',
            AGENDA: 'agenda_btn',
            EXPANDABLE_CALENDAR: 'expandable_calendar_btn',
            WEEK_CALENDAR: 'week_calendar_btn',
            TIMELINE_CALENDAR: 'timeline_calendar_btn',
            PLAYGROUND: 'playground_btn'
        },
        calendars: {
            CONTAINER: 'calendars',
            FIRST: 'first_calendar',
            LAST: 'last_calendar'
        },
        calendarList: {CONTAINER: 'calendarList'},
        horizontalList: {CONTAINER: 'horizontalList'},
        agenda: {
            CONTAINER: 'agenda',
            ITEM: 'item'
        },
        expandableCalendar: {CONTAINER: 'expandableCalendar'},
        weekCalendar: {CONTAINER: 'weekCalendar'}
    };
    


    loadItems = (day) => {
        const items = this.state.items || {};
    
        setTimeout(() => {
          for (let i = -15; i < 85; i++) {
            const time = day.timestamp + i * 24 * 60 * 60 * 1000;
            const strTime = this.timeToString(time);
    
            if (!items[strTime]) {
              items[strTime] = [];
              
              const numItems = Math.floor(Math.random() * 3 + 1);
              for (let j = 0; j < numItems; j++) {
                items[strTime].push({
                  name: 'Item for ' + strTime + ' #' + j,
                  height: Math.max(50, Math.floor(Math.random() * 150)),
                  day: strTime
                });
              }
            }
          }
          
          const newItems = {};
          Object.keys(items).forEach(key => {
            newItems[key] = items[key];
          });
          this.setState({
            items: newItems
          });
        }, 1000);
      }
    renderItem = (reservation, isFirst) => {
        const fontSize = isFirst ? 16 : 14;
        const color = isFirst ? 'black' : '#43515c';
    
        return (
          <TouchableOpacity
            testID={testIDs.agenda.ITEM}
            style={[styles.item, {height: reservation.height}]}
            onPress={() => Alert.alert(reservation.name)}
          >
            <Text style={{fontSize, color}}>{reservation.name}</Text>
          </TouchableOpacity>
        );
      }
      renderEmptyDate = () => {
        return (
          <View style={styles.emptyDate}>
            <Text>This is empty date!</Text>
          </View>
        );
      }
    
      rowHasChanged = (r1, r2) => {
        return r1.name !== r2.name;
      }
    
      timeToString=(time) =>{
        const date = new Date(time);
        return date.toISOString().split('T')[0];
      }
    
    
    return(
        <View style={styles.container}>
            <BackgroundGradient/>

            <View style={{ width:350,height:400 }}>
                <Agenda
                onDayPress={handleDayPress}
                testID={config.agenda.CONTAINER}
                //items={this.state.items}
                loadItemsForMonth={this.loadItems}
                selected={'2023-06-09'}
                renderItem={this.renderItem}
                renderEmptyDate={this.renderEmptyDate}
                rowHasChanged={this.rowHasChanged}
                showClosingKnob={true}
                ></Agenda>
            </View>

            
        </View>
    )
}