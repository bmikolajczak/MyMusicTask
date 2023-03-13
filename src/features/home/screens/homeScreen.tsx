import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {styles} from '../../styles/homeStyles';
import {checkIdInput, IResponse} from '../utils/utils';

export const Home = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  //switching ID options
  const [chosenPesel, setChosenPesel] = useState(true);
  //NIP checking
  const [nip, setNip] = useState('');
  const [nipErr, setNipErr] = useState(false);
  //pesel checking
  const [pesel, setPesel] = useState('');
  const [peselErr, setPeselErr] = useState(false);
  //request
  const [requestErr, setRequestErr] = useState<IResponse | undefined>(
    undefined,
  );

  const switchIDInput = (input: string) => {
    if (input === 'pesel') {
      setChosenPesel(true);
      setNip('');
      setNipErr(false);
    } else {
      setChosenPesel(false);
      setPesel('');
      setPeselErr(false);
    }
  };

  const checkPesel = (peselInput: string) => {
    if (checkIdInput(peselInput)) {
      setPesel(peselInput);
      if (peselInput.length < 11) {
        setPeselErr(true);
      } else {
        setPeselErr(false);
      }
    } else {
      return;
    }
  };
  const checkNip = (nipInput: string) => {
    if (checkIdInput(nipInput)) {
      setNip(nipInput);
      if (nipInput.length < 10) {
        setNipErr(true);
      } else {
        setNipErr(false);
      }
    } else {
      return;
    }
  };

  //Sending request
  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      name: name,
      surname: surname,
      id: chosenPesel ? pesel : nip,
    }),
  };
  const sendRequest = async () => {
    try {
      setRequestErr(undefined);
      if (name.length === 0 || surname.length === 0 || nipErr || peselErr) {
        setRequestErr({
          code: 404,
          message: 'Proszę wprwadzić potrzebne dane.',
        });
      } else {
        await fetch('https://localhost:60001/Contractor/Save', options).then(
          response => response.json().then(data => console.log(data)),
        );
      }
    } catch (err) {
      setRequestErr({code: 404, message: 'Nie znaleziono metody zapisu'});
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.header}>Wprowadź Kontrahenta</Text>
      <TextInput
        mode="outlined"
        onChangeText={text => setName(text)}
        placeholder="Imię"
      />
      <TextInput
        mode="outlined"
        onChangeText={text => setSurname(text)}
        placeholder="Nazwisko"
      />
      <View>
        <View style={styles.idChoiceContainer}>
          <Button mode="text" onPress={() => switchIDInput('pesel')}>
            Osoba Prywatna
          </Button>
          <Button mode="text" onPress={() => switchIDInput('nip')}>
            Firma
          </Button>
        </View>
        {chosenPesel && (
          <View>
            <TextInput
              mode="outlined"
              placeholder="PESEL (12345678901)"
              keyboardType="numeric"
              value={pesel}
              onChangeText={text => {
                checkPesel(text);
              }}
              maxLength={11}
            />
            {peselErr && (
              <Text style={styles.inputError}>Wprowadź poprawny pesel</Text>
            )}
          </View>
        )}
        {!chosenPesel && (
          <View>
            <TextInput
              mode="outlined"
              placeholder="NIP (1234567890)"
              keyboardType="numeric"
              value={nip}
              onChangeText={text => {
                checkNip(text);
              }}
              maxLength={10}
            />
            {nipErr && (
              <Text style={styles.inputError}>Wprowadź poprawny NIP</Text>
            )}
          </View>
        )}
        <Button
          style={styles.requestButton}
          mode="contained"
          onPress={() => {
            sendRequest();
          }}>
          Wyślij zgłoszenie
        </Button>
        {requestErr !== undefined && (
          <View>
            <Text style={styles.requestErrMsg}>{requestErr.message}</Text>
            <Text style={styles.requestErrCode}>
              Kod błędu:{requestErr.code}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};
