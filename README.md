
# Zadanie rekrutacyjne MyMusic

## Instalacja
- `git clone https://github.com/bmikolajczak/MyMusicTask.git`
- `yarn install`
- `npx react-native start`
- w drugim terminalu: `npx react-native run-android`

## Podsumowanie 
Udało mi się wykonać wysyłanie formularza bez wybierania zdjęcia z galerii. 

## Struktura

Pomimo małej wielkości apliakcji zdecydowałem się ją podzielić na foldery:
- *features* - globalny folder, w któytm umieszczane są funkcjonalności
- *home* - folder funkcjonalności formularza
- *screens* - folder z komponentem wyświetlajacym funkcjonalność
- *styles* - folder z plikiem zawierajacym arkusz stylów StyleSheet
- *utils* - folder zawierający plik z funckją sprawdzajacą numer identyfikacyjny oraz interfejs używany do wyświetlania błędu zapytania POST

## Dodatkowe Paczki

W celu szybkiej stylizacji pól tekstowych i przycisków posłużyłem się biblioteką [React Native Paper](https://callstack.github.io/react-native-paper/)

## Co bym poprawił

- Plik z formularzem spróbowałbym "odchudzić" poprzez migrację funkcji wyyłającej zapytanie do pliku w folderze *utils*.
- Funkcja powinna wtedy przyjmować argumenty przy wywoływaniu
- Obiekt *options* podawany jako argument funkcji `fetch` także należałby przenieść do pliku *utils.ts*. 


