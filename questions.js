const allQuestions = [
  {
    "question": "Które stwierdzenie dotyczące odbiorców rozgłoszeń (broadcast receivers) jest fałszywe?",
    "options": [
      "umożliwiają przesyłanie informacji pomiędzy składnikami tej samej aplikacji",
      "może działać dowolnie długo (jak usługa)",
      "umożliwiają reagowanie na zdarzenia systemowe",
      "umożliwiają reagowanie na rozgłoszenia dowolnego typu (w tym samodzielnie utworzone)"
    ],
    "correct": [1],
    "explanation": "\"Odbiorca rozgłoszeń (a w zasadzie jego metoda onReceive()) powinien szybko zakończyć swoje działanie\" (slajd 211)"
  },
  {
    "question": "W aplikacji wspierającej wiele rodzajów urządzeń nie jest zalecane",
    "options": [
      "tworzenie elastycznych layoutów",
      "tworzenie alternatywnych layoutów",
      "stosowanie rozmiarów elementów wyrażonych w \"dp\" zamiast wrap_content/match_parent/match_constraint",
      "testowanie na ekranach o różnych proporcjach"
    ],
    "correct": [2],
    "explanation": "\"Preferowanie wartości wrap_content albo match_parent w przypadku wysokości/szerokości zamiast konkretnych wartości\" (slajd 353)"
  },
  {
    "question": "Standardowo do projektu w Android Studio nie jest dołączana biblioteka (biblioteki)",
    "options": [
      "rt.jar",
      "android.jar",
      "jfx.jar",
      "androidx"
    ],
    "correct": [2],
    "explanation": "jfx.jar to biblioteka frameworka JavaFX, który nie jest obowiązkowy (wgl się go prawie wcale nie używa w androidzie)."
  },
  {
    "question": "Do modyfikacji ustawień współdzielonych w GUI można wykorzystać",
    "options": [
      "pochodną SettingsActivity",
      "pochodną PreferenceFragmentCompat",
      "ustawienia można modyfikować tylko w kodzie Java/Kotlin",
      "tylko standardową aktywność dziedziczącą po Activity"
    ],
    "correct": [1],
    "explanation": "np. slajd 189 (klasa dziedziczy po PreferenceFragmentCompat)"
  },
  {
    "question": "Klasą bazową wszystkich komponentów graficznych w Androidzie jest klasa:",
    "options": [
      "Component",
      "Control",
      "Widget",
      "View"
    ],
    "correct": [3],
    "explanation": "https://developer.android.com/develop/ui/views/layout/custom-views/custom-components?hl=pl"
  },
  {
    "question": "Które stwierdzenie dotyczące fragmentów nie jest prawdziwe?",
    "options": [
      "fragmenty są mini-aktywnościami, można umieścić ich kilka w jednej aktywności",
      "komunikacja między fragmentami powinna odbywać się za pośrednictwem aktywności",
      "w aktywności może znajdować się tylko jeden fragment w danym momencie",
      "zostały wprowadzone w Androidzie 3.0"
    ],
    "correct": [2],
    "explanation": "Slajd 114 wszystko elegancko rozpisane"
  },
  {
    "question": "Aby wyświetlić dane w komponencie RecyclerView należy",
    "options": [
      "ustawić źródło danych (ArrayList) w komponencie RecyclerView",
      "ustawić prezentera (RecyclerView) w źródle danych (ArrayList)",
      "utworzyć adapter dziedziczący po RecyclerView.Adapter, ustawić źródło danych i ustawić adapter w prezenterze (RecyclerView)",
      "utworzyć adapter dziedziczący po ArrayAdapter"
    ],
    "correct": [2],
    "explanation": "Kod ze slajdów 101-102"
  },
  {
    "question": "Stworzenie komponentu z własną metodą onDraw() i odświeżanie jego zawartości za pomocą metody invalidate() jest zalecane w przypadku tworzenia:",
    "options": [
      "płynnej animacji 2D",
      "płynnej animacji 3D",
      "rzadko aktualizowanej grafiki",
      "interaktywnej animacji"
    ],
    "correct": [3],
    "explanation": "Slajd 320 (przynajmniej pośrednio)"
  },
  {
    "question": "W aplikacji korzystającej z Room klasa encji (Entity)",
    "options": [
      "łączy dane z wielu źródeł",
      "opisuje pola rekordów",
      "reprezentuje bazę danych",
      "mapuje zapytania SQL na metody"
    ],
    "correct": [1],
    "explanation": "Slajd 153"
  },
  {
    "question": "Zarządcą układ we frameworku Android nie jest:",
    "options": [
      "FrameLayout",
      "FixedLayout",
      "LinearLayout",
      "TableLayout"
    ],
    "correct": [1],
    "explanation": "Linear i Table to obvious, FrameLayout jest na Wear OS"
  },
  {
    "question": "Środowiskiem uruchomieniowym (runtime) w Androidzie jest:",
    "options": [
      "CLR",
      "android runtime (ART)",
      "android API",
      "maszyna wirtualna dalvik"
    ],
    "correct": [1],
    "explanation": "Slajd 9"
  },
  {
    "question": "Klasa Handler służy do:",
    "options": [
      "obsługi przychodzących połączeń sieciowych",
      "obsługi zdarzeń interfejsu użytkownika",
      "zarządzania grupą wątków",
      "wykonywania zadań w określonym (niekoniecznie głównym) wątku (do przekazywania zadań do wykonania między wątkami)"
    ],
    "correct": [3],
    "explanation": "\"Klasa frameworku Androida, która rozwiązuje problem przesyłania danych między wątkami wykonującymi pewne zadania a wątkiem GUI\" (slajd 198)"
  },
  {
    "question": "We współczesnych wersjach Androida aby aplikacja mogła nawiązywać połączenia sieciowe należy",
    "options": [
      "zaimplementować żądanie dostępu do sieci w trakcie wykonania aplikacji",
      "dodać uprawnienie INTERNET do manifestu aplikacji",
      "dodać uprawnienie INTERNET do manifestu aplikacji i zaimplementować żądanie dostępu do sieci w trakcie wykonania aplikacji",
      "dostęp do Internetu mają wszystkie aplikacje"
    ],
    "correct": [1],
    "explanation": "Slajd 245"
  },
  {
    "question": "Który krok nie jest wymagany aby używać urządzenia z Androidem do testowania aplikacji",
    "options": [
      "uaktywnienie opcji programistycznych",
      "włączenie debugowania USB",
      "zainstalowanie sterowników urządzenia (Windows)/ zainstalowanie lub stworzenie pliku udev rules (Linux)",
      "zezwolenie na wykorzystanie fizycznego urządzenia w Android Studio"
    ],
    "correct": [3],
    "explanation": "\"Aby ADB mogło komunikować się z podłączonym konieczne są reguły tworzenia urządzeń w systemie plików udev\", \"Windows: Należy zainstalować sterowniki urządzenia\" (slajd 28)"
  },
  {
    "question": "Które stwierdzenie na temat jednostki „dp” jest nieprawdziwe?",
    "options": [
      "rozwinięcie skrótu to device/denstity independent pixel",
      "1 dp to jeden piksel na ekranie",
      "1 dp to pewna liczba pikseli zależna od gęstości pikseli na ekranie",
      "pozwala na uzyskanie określonych rozmiarów elementów niezależnie od gęstości pikseli"
    ],
    "correct": [1],
    "explanation": "Slajd 72 i https://stackoverflow.com/questions/2025282/what-is-the-difference-between-px-dip-dp-and-sp"
  },
  {
    "question": "W Firebase wynikiem zapytania jest:",
    "options": [
      "kursor",
      "kolekcja obiektów QueryDocumentSnapshot",
      "kolekcja map reprezentujących rekordy",
      "kolekcja map reprezentujących dokumenty"
    ],
    "correct": [1],
    "explanation": "Slajd 272 💀💀💀"
  },
  {
    "question": "Google dostarcza narzędzia do tworzenia aplikacji na Androida dla następujących systemów (wybierz odpowiedź uwzględniającą wszystkie systemy):",
    "options": [
      "Windows / Linux",
      "Windows / Linux / FreeBSD",
      "Windows / Linux / MacOS / ChromeOS",
      "Windows / MacOS"
    ],
    "correct": [2],
    "explanation": "No tak było i nie zmyślam"
  },
  {
    "question": "Połączenie sieciowe standardowego emulatora Androida jest zrealizowane następująco:",
    "options": [
      "emulator jest widoczny w sieci jako osobne urządzenie w sieci",
      "wszystkie działające emulatory połączone są do wspólnegowirtualnego routera",
      "emulator jest dostępny pod adresem komputera",
      "każdy działający emulator jest podłączony do jego własnego wirtualnego routera"
    ],
    "correct": [1],
    "explanation": "Slajd 231"
  },
  {
    "question": "Na określenie rozmieszczenia elementów względem innych pozwala:strona wykładu",
    "options": [
      "ConstraintLayout",
      "LinearLayout",
      "TableLayout",
      "FrameLayout"
    ],
    "correct": [0],
    "explanation": "To prawda"
  },
  {
    "question": "Do odbierania rozgłoszeń (broadcasts) służy:",
    "options": [
      "metodarecieveBroadcast()",
      "klasa dziedzicząca po BroadcastReceiver",
      "klasa dziedzicząca po AppBroadcastReceiver",
      "metodarecieveLocalBroadcast()"
    ],
    "correct": [1],
    "explanation": "Slajd 212"
  },
  {
    "question": "Które ze stwierdzeń dotyczących aktywności nie jest prawdziwe?",
    "options": [
      "stan aktywności można zachować/odtworzyć za pomocą metod onSaveInstanceState() / onRestoreInstanceState()",
      "stan aktywności można zachować/odtworzyć za pomocą metod onSaveInstanceState() / onCreate()",
      "stan aktywności zachowywany jest automatycznie bez ingerencji programisty",
      "standardowo aktywności są niszczone i tworzone na nowo przy zmianie konfiguracji"
    ],
    "correct": [2],
    "explanation": "Slajd 82"
  },
  {
    "question": "Metody związane z cyklem życia aplikacji są wykonywane w następującej kolejności:",
    "options": [
      "onCreate(), onStart(), onResume(), onPause(), onStop(), onDestroy()",
      "onCreate(), onResume(), onStart(), onStop(), onPause(), onDestroy()",
      "onCreate(), onStart(), onResume(), onStop(), onPause(), onDestroy()",
      "onCreate(), onStart(), onStop(), onDestroy()"
    ],
    "correct": [0],
    "explanation": "Slajd 52"
  },
  {
    "question": "Lista stanów",
    "options": [
      "typ wyliczeniowy określający stany, w których może znajdować się komponent graiczny",
      "klasa określająca wygląd komponentu w zależności od jego stanu",
      "to plik XML, określający stany, w których może znajdować się, komponent graficzny",
      "to plik XML, określający wygląd komponentu w zależności od jego stanu"
    ],
    "correct": [3],
    "explanation": "Slajd 170"
  },
  {
    "question": "W bibliotece Retrofit klasa Retrofit",
    "options": [
      "nie korzysta ze wzorca budowniczego",
      "nie umożliwia ustawienie adresu usługi",
      "nie umożliwia ustawienie konwertera danych",
      "nie realizuje samodzielnie wzorca singleton"
    ],
    "correct": [3],
    "explanation": "Slajd 249"
  },
  {
    "question": "W aplikacji korzystającej z Room interfejs DAO",
    "options": [
      "łączy dane z wielu źródeł",
      "reprezentuje bazę danych",
      "opisuje pola rekordów",
      "mapuje zapytania SQL na metody"
    ],
    "correct": [3],
    "explanation": "Slajd 144"
  },
  {
    "question": "Ustawienia obsługiwane przez AndroidXPreference Library mogą być przechowywane w",
    "options": [
      "bazie SQLite i pliku tekstowym w formacie XML",
      "SharedPreferences i PreferenceDataStore",
      "usłudze REST",
      "pliku tekstowym w formacie JSON"
    ],
    "correct": [1],
    "explanation": "Slajd 183"
  },
  {
    "question": "Opcje na pasku aplikacji:",
    "options": [
      "tworzy się w metodzie onCreateAppBarMenu() a obsługuje w onAppBarItemSelected()",
      "tworzy się w metodzie onCreateOptionsMenu() a obsługuje w onAppBarltemSelected()",
      "tworzy się w metodzie onCreateOptionsMenu() a obsługuje w onOptionsItemSelected()",
      "tworzy się w metodzie onCreateAppBarMenu() a obsługuje w onOptionsItemSelected()"
    ],
    "correct": [2],
    "explanation": "Slajdy 111-112"
  },
  {
    "question": "W Androidzie: (strona wykałdu: 15)",
    "options": [
      "każda aplikacja musi być podpisana kluczem stratyfikowanego wystawcy",
      "każda aplikacja musi być podpisana",
      "każda aplikacja musi być sumę kontrolną MD5",
      "aplikacje nie muszą być podpisane"
    ],
    "correct": [1],
    "explanation": "\"Podpisywanie aplikacji – każda instalowana na urządzeniu aplikacja musi być podpisana. Pozwala to na identyfikowanie autora aplikacji\" slajd 15"
  },
  {
    "question": "Które stwierdzenie na temat ustawień współdzielonych nie jest prawdziwe? (strona wykałdu: 183, copilot)",
    "options": [
      "możliwe jest reagowanie na zmianę konkretnego ustawienia",
      "możliwe jest reagowanie na zmianę wszystkich ustawień",
      "możliwe jest ustawienie wartości domyślnych ustawień zawsze uwzględnianych w kodzie Java/Kotlin",
      "możliwe jest tworzenie zależności między ustawieniami"
    ],
    "correct": [3],
    "explanation": "Slajd 183, ChatGPT"
  },
  {
    "question": "Które stwierdzenie na temat grafiki nie jest prawdziwe?",
    "options": [
      "klasa Bitmap stanowi pojemnik na piksele",
      "klasa Canvas zawiera metody rysujące",
      "klasa Paint określa kolor i styl rysowanych elementów",
      "klasa Brush określa sposób wypełniania elementów"
    ],
    "correct": [3],
    "explanation": "Slajd 321"
  },
  {
    "question": "Do obsługi rozgłoszeń nie jest konieczne:",
    "options": [
      "zarejestrowanie odbiorcy",
      "wyrejestrowanie odbiorcy",
      "użycie klasy BroadcastReceiver",
      "uruchomienie wątku klasy Handler Thread"
    ],
    "correct": [3],
    "explanation": "Slajd 211"
  },
  {
    "question": "Polecenie adb nie umożliwia (copilot adb - polecenie w konsoli)",
    "options": [
      "instalowania aplikacji",
      "dostępu do GUI Androida",
      "wyświetlanie logów",
      "kopiowanie plików"
    ],
    "correct": [1],
    "explanation": "Slajd 31"
  },
  {
    "question": "Klasą bazową dla pojemników (m.in. layoutów) jest klasa:",
    "options": [
      "Layout",
      "LayoutBase",
      "WidgetGroup",
      "ViewGroup"
    ],
    "correct": [3],
    "explanation": "Slajd 53"
  },
  {
    "question": "Które ze stwierdzeń dotyczących usług (pochodząc z klasy Service) nie jest prawdziwe:",
    "options": [
      "domyślnie klasy pochodne nie uruchamiają własnych wątków",
      "umożliwiają wykonywanie zadań w tle nawet gdy aplikacja nie jest widoczna na ekranie",
      "służą do wykonywania krótkotrwałych działań",
      "mogą pracować na rzecz innych aplikacji"
    ],
    "correct": [2],
    "explanation": "Slajd 209"
  },
  {
    "question": "Zadaniem kernela stosowanego w Androidzie nie jest:",
    "options": [
      "zarządzanie pamięcią",
      "obsługa systemu plików",
      "zarządzanie aktywnościami",
      "zarządzanie procesami"
    ],
    "correct": [2],
    "explanation": "Slajd 10"
  },
  {
    "question": "Stworzenie pochodnej SurfaceView i użycie wątku odświeżającego rysunek jest zalecane w przypadku tworzenia:",
    "options": [
      "niestandardowo wyglądających komponentów",
      "tworzenia komponentu odświeżanego w ramach systemowej hierarchii widoków",
      "rzadko aktualizowanej grafiki",
      "płynnej animacji"
    ],
    "correct": [3],
    "explanation": "Slajd 320"
  },
  {
    "question": "Do wysyłania rozgłoszeń (broadcasts) służy:",
    "options": [
      "metoda sentLocal Broadcast()",
      "klasa AppBroadcastManager",
      "klasa AppBroadcastSender",
      "metoda sendBroadcast()"
    ],
    "correct": [3],
    "explanation": "ChatGPT"
  },
  {
    "question": "Zadaniem obiektu ViewHolder jest:",
    "options": [
      "utworzenie wiersza listy",
      "przechowywanie danych wyświetlanych na liście",
      "przechowywanie referencji do widoków (komponentów) w wierszu",
      "obsługa zdarzeń komponentu RecyclerView"
    ],
    "correct": [2],
    "explanation": "Slajd 96 \"Elementy listy/siatki reprezentowane są przez pojemnik na widoki (RecyclerView.ViewHolder)\""
  },
  {
    "question": "Klasa R zawiera:",
    "options": [
      "identyfikatory tekstowe komponentów graficznych (widoków)",
      "identyfikatory liczbowe rozmaitych składników aplikacji (komponentów graficznych, napisów, layoutów, menu...)",
      "tylko identyfikatory liczbowe komponentów graficznych (widoków)",
      "tylko identyfikatory plików XML"
    ],
    "correct": [1],
    "explanation": "Slajd 74"
  },
  {
    "question": "W aplikacjach dla Androida style:",
    "options": [
      "tworzy się w pliku XML, którego głównym elementem jest element <style>",
      "tworzy się w pliku XML, którego głównym elementem jest element <resources>",
      "tworzy się w pliku XML, zawierającym layout aktywności",
      "tworzy się za pomocą klasy w kodzie Java"
    ],
    "correct": [1],
    "explanation": "Slajd 282"
  },
  {
    "question": "Które stwierdzenie na temat obiektu pochodnego ViewModel nie jest prawdziwe:",
    "options": [
      "przechowuje dane wyświetlane w widoku",
      "jego czas życia jest dłuższy niż aktywności",
      "można uzyskać do niego dostęp za pomocą obiektu ViewModelProvider",
      "jest komponentem prezentującym dane"
    ],
    "correct": [3],
    "explanation": "ChatGPT, na logikę i np. slajd 158"
  },
  {
    "question": "Do rozmieszczania elementów w jednym wierszu lub w jednej kolumnie służy:",
    "options": [
      "FixedLayout",
      "LinearLayout",
      "RelativeLayout",
      "TableLayout"
    ],
    "correct": [1],
    "explanation": "Slajd 55"
  },
  {
    "question": "Obsługi zdarzeń w Androidzie nie realizuje się za pomocą:",
    "options": [
      "rejestrowania obiektów słuchaczy, wyrażeń lambda lub referencji do metod",
      "ustawiania w komponencie wskaźnika do funkcji obsługującej zdarzenie",
      "definiowania atrybutu android:onClick w pliku XML",
      "zastępowania metody obsługującej zdarzenie w klasie pochodnej"
    ],
    "correct": [3],
    "explanation": "Slajd 75"
  },
  {
    "question": "W Firebase za uwierzytelnianie użytkownika odpowiada klasa:",
    "options": [
      "FirePass",
      "FirebaseAuth",
      "Firebase Check",
      "Firebase PasswordAuth"
    ],
    "correct": [1],
    "explanation": "Slajd 265 (w kodzie to FirebaseAuth, ale w prezentacji jest też jako Fireauth)"
  },
  {
    "question": "Bazą danych wbudowaną w system Android jest:",
    "options": [
      "MySQL",
      "PostgreSQL",
      "SQL Server Express",
      "SQLite"
    ],
    "correct": [3],
    "explanation": "Slajd 11"
  },
  {
    "question": "Typem usługi w Androidzie nie jest usługa:",
    "options": [
      "kolejkująca (queuing)",
      "związana (bounded)",
      "niezwiązana (unbounded)",
      "pierwszoplanowa (foreground)"
    ],
    "correct": [0],
    "explanation": "Gemini i Chat"
  },
  {
    "question": "W bibliotece Retrofit interfejs Api:",
    "options": [
      "zapewnia mapowanie punktów końcowych (ang. endpoints) na metody",
      "realizuje wzorzec singleton",
      "wymaga zaimplementowania przez programistę w klasie Api",
      "nie umożliwia określenia zawartości nagłówków"
    ],
    "correct": [0],
    "explanation": "Gemini"
  },
  {
    "question": "Zależności aplikacji (dodatkowe biblioteki) określa się w pliku:",
    "options": [
      "AndroidManifest.xml",
      "build.gradle",
      "dependencies.gradle",
      "project.properties"
    ],
    "correct": [1],
    "explanation": "Slajd 34"
  },
  {
    "question": "Które ze stwierdzeń na temat odtwarzacza MediaPlayer jest fałszywe?",
    "options": [
      "odtwarzacz może znajdować się w jednym z wielu stanów i należy wywoływać tylko metody dozwolone w danym stanie",
      "obsługiwane są media strumieniowe",
      "wszystkie metody odtwarzacza mogą być wywołane niezależnie od stanu w jakim się on znajduje (bez zgłaszania wyjątku)",
      "obsługiwane są media identyfikowane za pomocą URI"
    ],
    "correct": [2],
    "explanation": "Slajd 305, wyjątek OnPreparedListener"
  },
  {
    "question": "Które ze stwierdzeń na temat aplikacji dla Android TV nie są prawdziwe?",
    "options": [
      "powinna być przystosowana do sterowania pilotem",
      "powinna deklarować, że nie wymaga ekranu dotykowego",
      "mieć aktywność z kategorią LEANBACK_LAUNCHER",
      "musi deklarować, że wymaga launchera Leanback"
    ],
    "correct": [3],
    "explanation": "Slajd 357-358, wymaga to za dużo powiedziane bo może mieć atrybut ustawiony na true (nie będzie działać na innych urządzeniach) albo false"
  },
  {
    "question": "W warstwie bibliotek nie znajduje się:",
    "options": [
      "zarządca aktywności",
      "baza danych",
      "obsługa ssl",
      "silnik renderowania stron"
    ],
    "correct": [0],
    "explanation": "Zarządca aktywności (Activity Manager) to element wyższej warstwy, czyli frameworku aplikacji (Application Framework), a nie natywnych bibliotek C/C++"
  },
  {
    "question": "We współczesnych wersjach Androida usługi:",
    "options": [
      "mogą działać bez ograniczeń",
      "mogą działać maksymalnie przez 5 minut",
      "mogą działać dowolnie długo pod warunkiem, że są pierwszoplanowe",
      "nie muszą wyświetlać powiadomień"
    ],
    "correct": [2],
    "explanation": "Od Androida 8 (API 26) system rygorystycznie \"ubija\" usługi w tle celem oszczędzania baterii, chyba że podniesiesz je do rangi widocznej dla użytkownika usługi pierwszoplanowej (Foreground Service) slajd 215"
  },
  {
    "question": "Które stwierdzenie na temat stylów nie jest prawdziwe?",
    "options": [
      "styl dziedziczy po stylu, którego nazwa jest określona w atrybucie parent",
      "styl dziedziczy po stylu, którego nazwa jest przed kropką w atrybucie name",
      "styl dziedziczy po stylu, którego nazwa jest przed ukośnikiem w atrybucie name",
      "styl można zastosować jako motyw (ang. theme)"
    ],
    "correct": [2],
    "explanation": "Dziedziczenie stylów zapisuje się za pomocą osobnego atrybutu parent lub notacji z kropką (np. Theme.AppCompat.Light), a nie z wykorzystaniem znaku ukośnika."
  },
  {
    "question": "Do obsługi zaznaczania elementów na liście RecyclerView nie służy:",
    "options": [
      "pochodna MultiChoiceModelListener",
      "pochodna ItemKeyProvider",
      "pochodna ItemDetails Lookup",
      "klasa Selection Tracker"
    ],
    "correct": [0],
    "explanation": "MultiChoiceModeListener to przestarzały interfejs z dawnego ListView, podczas gdy w nowoczesnym RecyclerView używa się biblioteki recyclerview-selection opartej m.in. na SelectionTracker"
  },
  {
    "question": "Graficzny interfejs użytkownika w Androidzie można stworzyć:",
    "options": [
      "tylko wykorzystując kod Java/Kotlin",
      "tylko wykorzystując pliki XML",
      "zarówno w kodzie jak i za pomocą plików XAML",
      "zarówno w kodzie Java/Kotlin jak i za pomocą plików XML"
    ],
    "correct": [3],
    "explanation": "Klasyczny interfejs Androida można zadeklarować statycznie w plikach XML lub budować/modyfikować go w pełni dynamicznie z poziomu kodu obiektowego."
  },
  {
    "question": "Które stwierdzenie na temat kwalifikatorów zasobów w projekcie aplikacji dla Androida jest nieprawdziwe?",
    "options": [
      "pozwalają na oznaczenie elementów graficznych przeznaczonych dla określonych gestości pikseli",
      "pozwalają na oznaczenie zbiorów tekstów przeznaczonych dla określonych języków",
      "pozwalają na oznaczenie układów elementów przeznaczonych dla określonych rozmiarów ekranów",
      "wymagają uwzględnienia w kodzie Java"
    ],
    "correct": [3],
    "explanation": "Kwalifikatory (np. foldery values-pl, drawable-hdpi) są obsługiwane przez system operacyjny automatycznie w locie, przez co programista nie musi przejmować się pisaniem dla nich instrukcji warunkowych w kodzie."
  },
  {
    "question": "Które ze stwierdzeń dotyczących klasy SurfaceView jest prawdziwe?",
    "options": [
      "jej użycie wymaga zdefiniowania metody onDraw()",
      "nie umożliwia wyświetlania nakładek (overlays)",
      "zapewnia powierzchnię do rysowania",
      "jest przeznaczona do wyświetlania grafiki z użyciem OpenGL"
    ],
    "correct": [2],
    "explanation": "SurfaceView dostarcza własną, dedykowaną płaszczyznę renderowania wewnątrz hierarchii widoków, z której można korzystać z osobnego wątku (co świetnie sprawdza się w grach 2D lub przy odtwarzaniu wideo)."
  },
  {
    "question": "Którego hiperviziora nie wykorzystuje standardowy emulator systemu Android?",
    "options": [
      "Kernel-based Virtual Machine",
      "Virtual Box",
      "Android Emulator Hypervisor Driver for AMD Processors",
      "Windows Hypervisor Platform"
    ],
    "correct": [1],
    "explanation": "Slajd 21"
  },
  {
    "question": "Który element nie jest konieczny przy tworzeniu usługi pierwszoplanowej:",
    "options": [
      "umieszczenie uprawnienia FOREGROUND_SERVICE w manifeście",
      "poproszenie użytkownika o nadanie uprawnienia w trakcie wykonywania aplikacji",
      "utworzenie powiadomienia",
      "wywołanie metody startForeground() w usłudze"
    ],
    "correct": [1],
    "explanation": "Uprawnienie FOREGROUND_SERVICE jest uprawnieniem typu \"normal\", więc wystarczy jedynie wpisać je w pliku XML manifestu bez wywoływania specjalnych, wyskakujących okienek dla użytkownika podczas działania programu. Slajdy 215-220"
  },
  {
    "question": "Aktywności nie można uruchomić za pomocą:",
    "options": [
      "metody startActivity(intencja)",
      "metody launch(intencja)",
      "metody executeActivity(nazwaAktywności)",
      "metody startActivityForResult(intencja)"
    ],
    "correct": [2],
    "explanation": "We frameworku systemu Android po prostu nie istnieje metoda o nazwie executeActivity()."
  },
  {
    "question": "Hierarchia stosowania atrybutów jest we właściwej kolejności: (od najbardziej szczegółowego/nadpisującego do najogólniejszego)",
    "options": [
      "atrybuty z motywów zastosowane do większych grup widoków, atrybuty określone programowo, atrybuty ze stylów zastosowanych do widoku, atrybuty z motywów zastosowane do konkretnego widoku",
      "atrybuty ze stylów zastosowanych do widoku, atrybuty określone programowo, atrybuty ze stylów zastosowanych do większych grup widoków, atrybuty określone programowo",
      "atrybuty określone programowo, atrybuty zastosowane do konkretnego widoku (wXML), atrybuty ze stylów zastosowanych do widoku, atrybuty z motywów zastosowane do większych grup widoków",
      "atrybuty zastosowane do konkretnego widoku, atrybuty określone programowo, atrybuty ze stylów zastosowanych do widoku, atrybuty z motywów zastosowane do większych grup widoków"
    ],
    "correct": [2],
    "explanation": "Jest to poprawna, naturalna kolejność dziedziczenia w Androidzie – od wstrzykiwanych najsłabiej motywów całego okna, aż po najmocniejsze deklaracje narzucone \"na sztywno\" z poziomu kodu programu."
  },
  {
    "question": "Ustawienie targetSdk w pliku build.gradle oznacza:",
    "options": [
      "minimalną wersję Androida (API Level) wymaganą przez aplikację",
      "SDK wykorzystywane do skompilowania projektu",
      "wersję Androida (API Level), której uwzględnia aplikacja",
      "SDK, do którego autor dostosuje aplikację w przyszłości"
    ],
    "correct": [2],
    "explanation": "Jest to deklaracja dla systemu operacyjnego, że programista sprawdził i dostosował swoją aplikację do najnowszych mechanizmów obostrzeń lub zachowań systemu z danej wersji API."
  },
  {
    "question": "W aplikacji korzystającej z Room klasa repozytorium:",
    "options": [
      "reprezentuje bazę danych",
      "łączy dane z wielu źródeł",
      "opisuje pola rekordów",
      "mapuje zapytania SQL na metody"
    ],
    "correct": [1],
    "explanation": "Zgodnie z oficjalną architekturą Androida, wzorzec Repozytorium pośredniczy pomiędzy różnymi źródłami danych (np. wyciągając dane z sieciowym API lub z lokalnej bazy Room i wystawiając je gotowe dla ViewModelu)."
  },
  {
    "question": "W Firebase za dostęp do bazy danych (np. Firestore) odpowiada klasa:",
    "options": [
      "Firebase Firestore (dla Firestore) lub FirebaseDatabase (dla Realtime Database)",
      "Firebase",
      "Firestore",
      "FirebaseCloudDb"
    ],
    "correct": [0],
    "explanation": "SDK rozróżnia poszczególne rozwiązania poprzez konkretne instancje – obiekty FirebaseFirestore kierują ruch do bazy dokumentowej, natomiast FirebaseDatabase do starszej, synchronizującej chmury noSQL."
  },
  {
    "question": "Ustawienia współdzielone (SharedPreferences):",
    "options": [
      "umożliwiają przechowywanie ustawień współnych dla wszystkich aplikacji",
      "wymagają zapisywania i odczytywania danych w określonej kolejności",
      "umożliwiają przechowywanie ustawień współnych dla wszystkich elementów aplikacji",
      "umożliwiają tylko przechowywanie tekstów"
    ],
    "correct": [2],
    "explanation": "Ten prosty w użyciu mechanizm mapy klucz-wartość pozwala na natychmiastowe odczytanie globalnych preferencji użytkownika w obrębie dowolnej aktywności czy fragmentu danej aplikacji."
  },
  {
    "question": "Atrybut, którego postaci nie występują w standardowych layoutach (jako powszechna forma dla standardowych komponentów Androida):",
    "options": [
      "android:własność=\"wartość\"",
      "tools:właściwość=\"wartość\"",
      "app:właściwość=\"wartość\"",
      "właściwość=\"wartość\""
    ],
    "correct": [3],
    "explanation": "Tradycyjne środowisko plików XML Androida restrykcyjnie wymaga prefiksów (zazwyczaj android: lub app:) deklarujących, z jakiego schematu nazw pochodzi modyfikowana właściwość."
  },
  {
    "question": "Do wykonywania zadań w tle w systemie Android nie można wykorzystać:",
    "options": [
      "pochodnej klasy Background Task",
      "standardowych wątków Java",
      "klasy Handler Thread",
      "pochodnej klasy Service"
    ],
    "correct": [0],
    "explanation": "Taka klasa w architekturze standardowego Androida nie istnieje (do operacji w tle używa się np. starych AsyncTasks, usług, korutyn lub narzędzia WorkManager)."
  },
  {
    "question": "Z czego składa się Android Debug Bridge?",
    "options": [
      "polecenia adb",
      "klienta (polecenie adb na komputerze), serwera (na komputerze) i demona (na urządzeniu z Androidem)",
      "klienta (polecenie adb na komputerze) i serwera (na urządzeniu z Androidem)",
      "klienta (polecenie adb na komputerze) i demona (na komputerze)"
    ],
    "correct": [1],
    "explanation": "Slajd 30"
  },
  {
    "question": "Do obsługi rozgłoszeń nie jest konieczne:",
    "options": [
      "zarejestrowanie odbiorcy",
      "użycie klasy BroadcastReceiver",
      "uruchomienie wątku klasy Handler Thread",
      "użycie metod onCreate(), onReceive()"
    ],
    "correct": [3],
    "explanation": "Handler Thread też nie jest konieczny (druga poprawna odpowiedź?). Podstawowym punktem wejścia dla obiektu BroadcastReceiver jest metoda onReceive() i komponent ten z natury w ogóle nie implementuje ani nie wywołuje metody onCreate()."
  },
  {
    "question": "Klasy rozmiaru okna, które należy uwzględnić tworząc aplikację dla Androida to:",
    "options": [
      "telefon / tablet / TV",
      "watch / phone / tablet",
      "portrait / landscape",
      "kompaktowa / średnia / rozszerzona"
    ],
    "correct": [3],
    "explanation": "Slajd 351"
  },
  {
    "question": "W systemie Android można wyróżnić następujące warstwy:",
    "options": [
      "kernel / biblioteki / framework aplikacji / aplikacje",
      "core os / core services / warstwy multimediów / cocoa touch",
      "core system / mobile core / phone shell",
      "kernel / biblioteki / framework aplikacji / app launcher"
    ],
    "correct": [0],
    "explanation": "Slajd 9"
  },
  {
    "question": "W bibliotece Retrofit w klasie Call metoda enqueue():",
    "options": [
      "wykonuje zadanie natychmiast w głównym wątku aplikacji",
      "asynchronicznie wykonuje zadanie w dodatkowym wątku",
      "kolejkuje zadanie do wykonania w głównym wątku aplikacji",
      "asynchronicznie wykonuje zadanie w głównym wątku"
    ],
    "correct": [1],
    "explanation": "Retrofit sam dba o przeniesienie pobierania danych za pomocą enqueue() do osobnego wątku (work thread) w tle, aby zapytanie sieciowe nie spowodowało zamrożenia Twojego interfejsu (ANR)."
  },
  {
    "question": "Jednostka specjalnie przewidziana do określania rozmiaru tekstu jest:",
    "options": [
      "mm",
      "px",
      "dp",
      "sp"
    ],
    "correct": [3],
    "explanation": "Skrót \"scale-independent pixels\" to jednostka wymiaru, która oprócz gęstości fizycznej matrycy ekranu bierze pod uwagę również globalne, powiększone w systemie preferencje skalowania czcionek ustawione przez samego użytkownika."
  },
  {
    "question": "We współczesnych wersjach Androida:",
    "options": [
      "można używać tylko połączeń https",
      "można używać połączeń http i https bez dodatkowych czynności",
      "można używać połączeń https pod warunkiem dodania certyfikatu serwera do manifestu aplikacji",
      "można używać połączeń https, jak również http (pod warunkiem określenia wyjątku w pliku security_config.xml)"
    ],
    "correct": [3],
    "explanation": "Android domyślnie blokuje podatny na ataki ruch po niezaszyfrowanym http od wersji API 28 i wymusza na programistach jawną deklarację wyjątków (CleartextTraffic) w manifeście dla każdego docelowego serwera niezabezpieczonego SSL-em."
  },
  {
    "question": "Firebase Firestore to:",
    "options": [
      "relacyjna baza danych działająca w chmurze",
      "relacyjna baza danych działająca na urządzeniu mobilnym",
      "dokumentowa baza danych działająca w chmurze",
      "dokumentowa baza danych działająca na urządzeniu mobilnym"
    ],
    "correct": [2],
    "explanation": "Firestore nie opiera się na tabelach typowych baz SQL, tylko przechowuje bezszablonowe dane w formie kolekcji elastycznych dokumentów chmurowych, zapewniających natychmiastową synchronizację dla wszystkich połączonych klientów na bieżąco."
  },
  {
    "question": "Klasa Handler:",
    "options": [
      "może służyć do tworzenia grup wątków",
      "może służyć do tworzenia pojedynczych wątków",
      "może służyć do okresowego wykonywania krótkich zadań",
      "umożliwia tylko dodawanie zadań do kolejki w celu jak najszybszego wykonania"
    ],
    "correct": [2],
    "explanation": "Interfejs tej klasy pozwala na wywoływanie bloków kodu z opóźnieniem (np. za pomocą postDelayed()), co sprawdza się genialnie do budowania szybkich, cyklicznych timerów obsługujących odświeżanie logiki aplikacji."
  },
  {
    "question": "Opis aplikacji przeznaczonej dla Androida zawiera:",
    "options": [
      "plik manifestu w formacie JSON",
      "plik manifestu w formacie XML",
      "plik project.properties",
      "plik android.app"
    ],
    "correct": [1],
    "explanation": "Serce konfiguracyjne projektu mieści się w pliku AndroidManifest.xml, który zawiera fundamentalne zapisy dotyczące nazwy pakietu, wykorzystywanych komponentów, filtrowanych intencji i zapotrzebowań systemowych danego programu."
  },
  {
    "question": "Który opis elementy interfejsu systemu Wear OS jest niewłaściwy:",
    "options": [
      "komplikacja - element prezentujący informacje, którą użytkownik będzie sprawdzał wiele razy dziennie",
      "powiadomienie - prezentuje ważne informacje, zapewnia akcje kontekstowe",
      "kafelek - zapewnia szybki dostęp do ważnych informacji / akcji",
      "nakładki - elementy wyświetlane nad innymi"
    ],
    "correct": [3],
    "explanation": "Nakładki (ang. overlay) – interaktywne przewijane listy (slajd 364)"
  },
  {
    "question": "W bieżących wersjach Androida:",
    "options": [
      "aplikacja otrzymuje minimalny zestaw uprawnień ale musi prosić o dodatkowe w trakcie wykonania",
      "aplikacja musi prosić o wszystkie uprawnienia w trakcie wykonania",
      "użytkownik zatwierdza wszystkie wymagane uprawnienia w momencie instalacji",
      "wystarczy umieścić wszystkie wymagane uprawnienia w manifeście i aplikacja automatycznie je otrzyma"
    ],
    "correct": [0],
    "explanation": "Android rozgranicza uprawnienia w podziale na te normalne (nadawane odgórnie już z manifestu) oraz te \"niebezpieczne\" (Runtime Permissions), o które musisz poprosić wyświetlając użytkownikowi odpowiedni \"popup\" kiedy aplikacja użyje np. mikrofonu. slajd 15"
  },
  {
    "question": "W skład projektu aplikacji dla systemu Android wchodzą:",
    "options": [
      "pliki źródłowe, pliki zasobów, biblioteki",
      "tylko pliki źródłowe i pliki zasobów",
      "tylko pliki źródłowe Java/Kotlin",
      "tylko pliki źródłowe stworzone przez programistę i pliki wygenerowane automatycznie (np. klasa R)"
    ],
    "correct": [0],
    "explanation": "Pełen zestaw środowiskowy potrzebny do wygenerowania paczki instalacyjnej (APK/AAB) zawsze zakłada obecność kodu imperatywnego, zasobów deklaratywnych i pobranych zależności. Slajd 35"
  },
  {
    "question": "Korzystanie z Firebase w aplikacji mobilnej nie wymaga",
    "options": [
      "dodania aplikacji i pobrania konfiguracji w pliku json",
      "stworzenia projektu w konsoli Firebase",
      "włączenia Google Analytics",
      "dodania zależności w plikach build.gradle"
    ],
    "correct": [2],
    "explanation": "Podłączenie modułu statystyk ułatwia śledzenie demografii, natomiast system ten jest rozwiązaniem opcjonalnym, odseparowanym od fundamentu bazy i nie blokuje dostępu np. do uwierzytelniania w backendzie. Slajdy 258"
  },
  {
    "question": "Klasa Platform nie pozwala na sprawdzenie",
    "options": [
      "nazwy komputera",
      "wartości zmiennych środowiskowych",
      "właściwości okna aplikacji",
      "systemu operacyjnego"
    ],
    "correct": [2],
    "explanation": "Interfejs Platform w Dart pozwala na rozpoznawanie np. wersji jądra pod spodem, z kolei badanie właściwości stricte ekranowych opiera się już na silniku interfejsu poprzez zbadanie np. elementu MediaQuery."
  },
  {
    "question": "Style:",
    "options": [
      "istnieją tylko jako standardowe style wbudowane w Androida",
      "pozwalają na zdefiniowanie zestawów atrybutów i stosowanie ich do komponentów",
      "nie obsługują dziedziczenia",
      "są definiowane w plikach css"
    ],
    "correct": [1],
    "explanation": "Korzystanie ze stylów drastycznie ogranicza \"puchnięcie\" powtarzalnego kodu źródłowego w XML, centralizując wybrane cechy czcionek czy marginesów w jednym, generycznym tagu. Slajdy 283-284, style w androidzie nie są definiowane w css (tylko xml)"
  }
];