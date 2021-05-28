import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Feather, Ionicons, Entypo } from "react-native-vector-icons";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

const MyOrders = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <View
          style={{
            width: "10%",
            justifyContent: "center",
            paddingLeft: 15,
            marginRight: 30,
          }}
        >
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="arrow-back" size={28} color="white" />
          </TouchableOpacity>
        </View>
        <View style={{ width: "90%", justifyContent: "center" }}>
          <Text style={{ fontSize: 22, fontWeight: "bold", color: "white" }}>
            My Orders
          </Text>
        </View>
      </View>
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {/* --------------------------------------Chicken Boneless--------------------------------------- */}
        <Card elevation={20} style={styles.card}>
          <View style={{ flex: 1, paddingTop: 20 }}>
            <Title
              style={{
                textAlign: "center",
                fontSize: 18,
                fontWeight: "bold",
                color: "grey",
                marginBottom: 10,
              }}
            >
              Chicken Boneless
            </Title>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                paddingHorizontal: 25,
              }}
            >
              <Image
                source={{
                  uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGRgaGhgYGRwaGhoaGhwaGhgaGhgYGhocIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQrJCs0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQACAwEGB//EADsQAAECBAMGAwcEAgEEAwAAAAEAAgMEESExQVEFEmFxgZGhsfATIjJCwdHhBhRS8RViI4KiwtJTkpP/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQMCBAX/xAArEQACAgICAQMCBQUAAAAAAAAAAQIRAyESMUEEE1EiYRQyQnGRUqGx0eH/2gAMAwEAAhEDEQA/APr7kl29LGjYjcWY8q1B6HzTN0w4/Cxx4mgCyiQorxQ7rQf+qy0tEslSi0jslGa9gfXHHgcwtnRmDFzR1CQMkPYxPfJcx2uHbh5FPGyjCPgaR3Q0kZxzlJU1TRQ7Qh4b1eQJWb515+BhPE2HrBGsgMGDQOi0oEaKVJ9v+BZ7KM/FwaNB65eKWz2ydx7YocTcb355iy9LRUiww4FpwKEzE8UZLfYNAlmbtmgg3RDYbRgAgpdxhu3HfCfhKYBDNQarrZKKyiqXAZpFDtEtitdCdvNuw4jRGumWDOvK6q+IXCgYSDrZNE5U+ns0Y8EVGBVyk5bEhG7gGE5Cpaj2QWkAkl2daoaCM29Vsu6aaLVvwuqmYJ+Fh62WrIbRgAFokapgpe/+Le6VzMCMx2+0tA+YDzTxcIyKaZmWPku2BQpcOAcXucDxp5LVkswfL3uhA4wXUPwO/wC0pkUMI0+1s42GBgAuqNKgKRQ49qWn/hfX5HeBTMrKOGkEOIoU0Ykr2uzVrgRUYKyUS822Edx7hu/K76I/94zI15AooI5E19whRDfuv9HdlEqHyQcuUXGlZRt6waBzOXTNIbdHJiXa9pa7Dy4hL5SIWO9m/wD6TkQjPZxDi8Dk37oaf2aYjbvdUXFLCq0vglNPuK3/AJD9/iub41CWSEFp919S8WNSbo8SrP4hZaNwk5K6LPmGDFwU9vo1x6fdWbDAyHZXCEapgkeG94pQNGpuQhIJcw7r3OI+V2Cboealg5tM8RzWkycoX9S7LexGpPUrrYDRkELJxiDuPsRgfojd4aoZqLTVkDQMArLMx2/yC5+5br2SNWiz4YcCDgUvh1hO3XH3D8J0Rb5g/Kxx8Ag56Mdw74a0HU36JWktmWrdx7GAK5EitaKuIA1Nl5qFtKI1u6C22BpgOqGixi41c4k6n6aLkyerjHUdnRjwykrlodTG3WizGl3E2H3S+PtmIcw3kPqarfZuzd8bzvhyAxPHkjYrGs91rGgcga89VJyyyXJul9in0RdJWIY20HuFHvt0p4LSX2w9gAqC0ajwsuz0ixwJZY1rTLkBkgYcJosbHwXLLJli/wAzKpY5K6/sO4O3q4sodQajtkjoUV7xVrmjxP4SSVlXONGgAYl2SNiuhSzHRHEuc0VxpfIAcSunD6qf6qa+SGXHDtMZiWcfieellYSjMxXmV5DZv6wiPjNa9jAx1fh3i4WJFyaHsvXwJkOFQuqPqFLo51BNWSNKMcKFo7eKGhRzDcGPHu/K77o8rKNCa9pa4fg6hWjJMzKHmPZvvjUd1Em/xbv5t7Lq3oxyn8Dqq0aVQhRpWSxoqlWqhnTIwAJ5Dl9/ApibS7Bp+AfjbZw8aLaVmN9tc8x6yXC97rAbvO/X1olcSQ9m/eLiWuxGA4j6p1ZFtxlcVp9jz2rdR3VHTTBnXldchMZkBhpktWtGiRXZl+4r8LXHw81zfeflA5mvkt1WqAp/IFNSBePeca5Ut6Cxkt0EscPeGtTXumEWK1o94getEqnYzXEFpIIzRyS7E8LbuK2M2hoyHZZTE2xg94gcM+gSuYnCbB+7yF/wgHS1blxJ1I/K58mWS/KrOqGH+rQVNbccbMFOJueyVRYziaucSeNytY0AjAjyQUVpb8VvXZedmlkf5v8Ah0xhFdFjGWsp7z2t/k4Dpn4IMAnC3rVGbOG69jtCPyopq1ZprR7uGwAADAWCBn4aLhxgQso7gar1nxlGkcCtM8/GSNk2HxSwuANSCdAK1PYL0My2i8DthwZMudk5uHEjdPkuLLHVF8b2eznXOfBLZZ4Y8EBjgPiFbg73n1SWXlnx27keI5u7UuPuNo4W961wLoOP+pdwsYwD3S1znEWaCKUOmSPnZqgeXEAvZfi02Lh3C546tMxKm2g7Yux4UMvc2K2K8AtG7T3QbGwJvknshDLbLzv6e2IfcjPqxzWtB3Tul4Dae/wwyqvSxJsCwtysumGldGVGtDBpXXMqKJKZtdbOEZrf4jj4HwsP/wAeNXf/AG/CiF/yHqqif41fBn2R2VxWVSvQJkaVYKgVggDqziww4EHAqsXesAQONKpdMzNLB5J1Fh4JOSirYKLk6SNjWEB8zSeo+ykXabRgCfBJ40xxQkSMoSzN9HTi9Kl2N4u2DgAByxVYO16A71Xaa+KSOfS9QsHx8lP3Jd2dHsRaqhtGmC5xcSBU+GQuhnv68Ssvb2rXHx1Cqx4NLV7ocrNRjSNmc+1lZxAw9d13DLkPBUiP4d/7RQrBYhqadksmZkVG7jgcr6po99bKv+MY4e80iuOR/CXEopRXYHLTm/bPzRe47Q9Aj5WGxjd1oAwqcXHm4qkUNNQLHWp45YFc0vTxb7oTlvSLSM5GYA0sc5uRFKgcQTcI0zbq3FOo8qpQ6IW2WESZKrHGoqrZN4+Q8jR2uGN14H9TQT7QOOFMdKHPinnt3arGPH3hQ3Cc48kCwOO0eAh0c87z6AmpIBPK1F7OUnnPiNMBzDutaN2K6m8QfjDA0k0AAOGSVTH6cDn7zHBoOIdWg5EX6IDasm+XdDcH1Pve8KihGmeBXNJLkkccoTjdrR9NO1vd/wCQtbTEg+7zqb90rmv1LLtNN8uP+oPmbLzD9rtLd2KHGoBwGdxph9Epm9wGrDUY/AQe4FChStbYO/07Po8nPsit3mEmhoa2IPEIlsXJfPNn7YENjgC5rjnuuItW9KL0MPaL9zfDg9lquGVcN8fKTxtos3XZSN0uWj0e+PRC6vPf5U6eIXUFKPqJXCoovbOIqsJidYyxdfQXP46pRtrar2P3G+6KA1zNb9MwlkGLvVe7GtdSTXE9lOWStIvDC2uT6Hc7PlwtYePVKYkbFYPmEJEjX4LmlPl2dePEkjZ8dYGMgnzK3loe8N4nosLZdpRR18beIDa40WgkiT8Y7flGQ7XwAHDtTLFYRIui1pdmeTfRk2Tc2xe2nj2NvFGSkOgoCBiauI5VxS2LM0/CoJs4appxQShKSHUdhaaFwuLHI/b8IdkBzuXnyGaxlpppJBx8CnENhc2gbQ+I9fVbVSIu49i8e7gKcc+646IiJ2ARc41v1QRKTVG409li+izD6FXcsYiTRpG0SIC22Of0S6M+hpmtC7RViDe97DAG1kMapMxa5Zx20FdUY2G00BNr8LZBCbVjNHuilrY+CVa2PlbpA0ONjU2WU/OBzAxpAOJc4A0p/FpxKC9tW2WuabbM2Q59HH3W41OJAxoFxyTnJKJjKlVHlA0xnEBzi8D5yCCP9SBUcimmwJKKXOY5jqUqCRYHQHA9F7KU2HLwwCxjd73iXEbzqcCb/wBo6GPQp28lX2fD6OaGKql5FMp+nwfjsNBj3KCn9k+wfvw3OIdUGtDSuWFC08sl6R0UDNK40etQbhKWKPGki3Dk7Yo3W/8AwQf/AM2KIz2LNT4KKHtSHwPpkSIGiriANSaBKJvbYFmDeOpsOgxPgksxHc41e4nnlyGAWTTp3OHf6Lrn6qUtRX+znhgS3IptKI57t518q0FumijJrdZTHAAY8yOH3yViKkZ3Azp20uEHMDpfG9+C1BSS+pnUuNKIDPbQLPlJytxSuJti9C006VRs02uKCdJF9mip9YlZcWdUJQS2jF+0mnA90z2DNF4OjT5qkl+mQSDENv4tOPMr0EKRhsFGMa0cBjz1TjF3ZnLljVI1hu903t90HMlERX0bdLI8fRak/BGC8mEdyAdGIw5rd8Yg1BQ8WpuKEnuOdKBYo6Iyrs62fLcLFPdk/qUWY40OArh3+h1XnG7OccTTki4WzQMG97+acVJOwye3JUz2EWcDx4DgKXPEoJ4SuHBitFiKUzFaIKZ2y9ho5ttQtOb8ko4b1FnoIhAzWW4SksHbAfmiWTw6JqSYSxSiHRGjI1WTLY4Zqjp8ZAYUVzMNIwodRXtRO0TcZVtAzou64tOSxnZcRGnds4YceB+6tHaHur07f2rNY5t8lllEtfcXfp+Xa8lzvlNA0jEjUcKr1v7gVtbSg8UjeA0F7RxcBidSBmVh/lQbtPDFYi1HRjg5Oz0b44pSoqWilOZrXjT6KgjWobev7SeBNktpUEE2FRY51rgj2xmXJO86oNKWrS9PXdbqxceIfDcKOqcQa08ktjuobK7Y9y43xArrTxXKbzSMaEAdfonQdGHteAUVfZlRAaHcODm7nRXZDBochWvDQDXWyxfNXv656qv7poBsL51vUYH+lOHGPRjjItHiUbuUvUvtWtwaA0zGiWTLsMdMRTW1OJKMdLPfc1ocyT/eZXIkhvAVfgALN4U14K3aHFpMCgSLnitmjU5/dMIMq1rQAa65VOpRTCBQOFhjktJmD7wa24OHG5+3mitA52wXDAKpJRMaF7240Vpj9VlFgkHA0788OYRQrRU3F0nn5Whqy2oTN71hEvgk1ZuLcehFLQy95a61BfjXC6cS0na1AB66oCOCxxdTmEx2RPMeTnTI26pJpaHPk1aC2QcloyV4d7K5jNGSzjTlyK1GvTim5Iwky8wz3bYcKnxXnJ2WDsk2iRC7E20LvosnQhS7m+J8gk1ZSL4nlpnZzmmrMfNDmacPiBsvXiACaWPh5oSf2UDawOazxKrN4YihveUZA3jiUu9q6G8srWhpStRyqnco5rxVvUZg6JUblKt+DWWho9hFKFDsh0W8JBzydhDIYAsBQ4rz05s4b5sRmKY0yXo2dfBdmYQeBUcv7+izkhyWuxRk4s8c+E9mFx5ffot5LaJBxocE1fDNS3S2Ch2a12IB9armWaUXTK84yX1GctNt3r1OYwpXKtckbBmiC51QS6odW9vJL37Hp8LiOGI75LrIL22IJ4ipCrHPH9hcYvoZ/vR/EeCiC9m7+BUWvfXyL20XjzQrQmlTaooj9mS9RvnI0boTmeiwjQy4UOGmvCuPZFytGsDRYAG1Ta9Se5Kngnyl9SCb1oOfM0G6Tbr6ohY8QC3zVvgfELB8UjKnEHLC4JuEDGmCMKW5Yj1guxslGAdMx6Zg2voDmPBNNlneaX40wGhIuvKRJo63r3OtxqnOwp61KVqQDXz5XKItWOcGoj5jNxhc6xN3E5aBJY8ap92ugHrVEbTnN4kDqdaYICG7d98/F8g/8z9O63J+EShGtstEZcjTxOBp18kTDlLVqNeeP2KB9p68vutBNWufQWLRRxkzHaUt7p6ryL5h8J4LTnzrwXp5yfaQRVebnGF5JDaBYlsvitKmOJbbAiDGhzGiLZF6ryDYT2EXwXspCAww2gihLWuJLr1IrYacERi7DI4pWGQdxwwVHtYBUuIGmZ+yw3Cw1aajKqBjw3ON+y0tEaTfZaNtKnwA8OHGqXzM1EoaYmuJ1zRbYK1/bINWkeLMrFa696pls2adDdvbvAg5hehMrWlljtPZwDCQLgYpcTfu/pYwkYrYgDgbG1M66IktAXjdg7RIcG1pvZ6EYHnkvUwIpwKxYpQphdfJEQq5Z5ZGqwEWgpw8URLOww8bUrX6Ki2Rl0ZzUGl6YgH8VWLXaeuq1mJgkXWTHhcmeK5KjK6NRDrcrVhAsMVm01WjR6y/K5+KHbNN48PD7KLnsz6p91E6Czz+ytsQ5iu4TVtKtNjQ4cCLHNMXA2vSvfskuxNkshNDtwB5GArUA4AknFNN08sxzTU4xncejeO3FOXZSZjECmXZK48Udda/REzT8aUtQEA4WzHFJZmJxXY5HRBIIdFW2z9oljwa+7W/XMaH7JI6ZU/cJqRuUU1TPdRo9bg4+WiCjTFKk4pFs2ciE7jSCP8AatuSfS2znP8Ai58005Mi4xj2D/uXu+EU5qMlnvxJoU6/ahopSpwFFT2fA/Zb4/Jj3PgXNkMh1K2bIg2CMaPuiGNAYTTNNUYlJnntpQGsFSuwZsU4pbt2aq6leaClpnJZ5FVC47PYQYwICrFYlEtNJpAmAUcjDjRwMWjW5LUNBwVnM1TuxGbAptF//G7kfJaU06rOYaDDeDjQ+SDLPmESLuPoLhep2VtffaKjLG9eqXP2Ne61ltkPBq0+uK55ZYs6E/DZ6qHG3gjGRCG40pVIZZkVvy73I08CmXvlnwEa/TAojmivJOcTkSLUqNiHJSFKuOSOgyqhKTk7ZOVeCQAc0a3grQJWqMZDa3ikt9GGwTcPoFRG+0HDsuJ8GLkImPYSACGONLPw0BadDoaU1olW3YcYGzXBgF3tILeJLmGg5IGRmXB7jEZvuNLVFAag1JFhSgtkmcw4shOe17mupkeIFPFQrwycnOUG3aXx9jzWzQ973blQ3wJObr40Cav2ICLvNeDUTsWpbvlzverVtt0Gty21enHPFFbTn4cuwPea1NAG5mhOOQFCqqUm6iX9NJwx9/cRO/Te98zu4+llR/6cpg91ehHknuy9rMmAdy27i00BocDYm2PZFmnPy/Kcpzg6ZdZOWxDsTZb2RakgjdIwvWo/K91I0pTCxvQuOHgkcNwLk72ePdJo81t7v1ouv00nKNsjlBWvaHEuqQAaUIx1XGxAQTmbdK1cTzJUmC0OJpgRQeVUNEjcak3cdToOHrRWuhJWWfUk1NTr9PBXjP8AcIHGumFe4+qHZEotN+3dKzbR4Xa0JwO9lnzS9r6L021IA3HMNKkHpkPXBebGy3jAmnFSlOK0ysZBkvMplLTiTMkH5K/7WOMG1Cw5x+TacT1MvOcUxhRwV46HEiN+Jjul0yltotHxVHMUSU6FKCfR6bfoEumI2IV3TYLRu3qhg2uSc8qSpEEq7M2sRkvBUlpeqaQYS5GrCzGFKhFNhrZjFo1iEkujDkZMhE5LdkEDG/kuxIgaLnohHxnOsLBXx4ZS6JSmkERZoC2JQznudwCtDgIyDK1XdDBGHe2QlkbF/sOCicfs1FaidnmzLAmwA5LKc2YXsezeoSLWwNajDkjoMwDb4T6zVydL+X5XhVR6L+pV4FUPZxaxrAfdaKWzOJJPE1Nkn/UWxHxWAMu5u8W4UNaVFeguvVO43OmS57Mutj5dVqEnGXJdhxXHj4PAbCgRoDiSy5AbS9AAa44L10Bj3Crhu16f2mjZYDE9vp6K0MMaY9ytSk5yuQRaiqQtZDoai9Og8fx1RsrGpXGhGvmruljnTgBT+kLMMf8AKL6YV5LeLJw/Y06kSZcgnPVZiM/Asd0FfKqFdEf/AAd2Kt70WUjAaFlBWqs2htXhX8Ja18Q/I5WYyJ/FJ5kDj9zs7IgO3rX89R91i2EMgi3S78XV9cFaDCOlPPsueck3aMNmcKUGfrkEdDlhpTzW0KEOaKZDWaM8gZso3T1zzXDIs/iOyODF0DTumLkxe6RGi6yUGiPLdVAyvJCQnIFZARDIYAqVpRYPmP43OqrGDk6SMSmkbBzRjYIeJME2b3+wVWwS7FGQZXguvH6dR72c8sjfQIyCTc3RkGVrkmECS1R0OAAutRJNgMCSR0OAAiGtXaLSRmzP2YUWlFExHzhpDh4GuI5haF7mjUY0J+q9XP7GZEvTdf8AybY9deq87PbPiQgajeb/ACb9RiF52T00l1tHXDKWl3Ndz09Y9EU1nbw9eqpJ7cZio1H2H07I6FNmgvvN4YrlcKLcrDxQYXK4eJ9euayEw04dvwpc+vVFNjou6KMB9yfXFVaDy8+p+y61ug56flWHG5SH0cZD0CuWNHE+AUDyfXqqnrgnQWzhFfVvyqkDLv8AZdJ9fhdDUUFlWsHr1ZV9hU+vRWysChCszZCor8vwuk9fL8rjnerf0FpiJQc/Wihcqj16zVYsYDnwQk3pA3XZqAM1lFmQLC5WYDncAiYEpoF2Y/TPuX8EZZPgF3HP+I20RcCV0CYy8jqj4cuAuyMElSOeUrF8CR1R8OXAW4YrAKiVGbKhqsAu0XVoRFFFEARRRRAGZaqOYtiFUtSGIp/YDH1c33H6jA825rzc3s+JBdVwoMN9t2nnp1Xvy1ZvYDYiylPDGX7m4zaPAMO8a4OANx0RLJsgUfgMx9QnU5+n2k70M7jtPkPT5eiSzEBzDuvbunI5Hkc1wZcEonRDImGQ3b4qHW4Y/hWLQLUr5JUWuaatPrktIW0aWeKcR9c1zuLK3Yx3vWX5XfXrRYQY7HX3h39VW7Yg1FPXZKgOlpXG1UMVuqr7atgK+X5RQ7NacfXP7KcvXRUB9DJRz9fx+Uu+hHS7TuqveAMfXJcq52Fhx+gW0GVrlU6ldOP00pblonLIl0YDedwHit4EpoEyl5DVMYUuBku6GGMVpHPKbfYvl5DVMIcuAtg1WorKNE2yoarUXVFoRFFFEARRRRAEUUUQBFFFEAdK4rLlEAVIVS1aUXEAZlqxiwGuBDgCDkbhFUXKJUOzzc7sDEwjT/V2HQ4hebmoLmEh7Cw1tXA8jgei+j7qpFl2uFHNBByIqFGeCMvsbjkaPmD4d8l1jL4+K9xH/TMu64aWH/VxA7YeCEP6SZk9/wD2/wDquaXpJeKKrMjz8IAevWiIgxQP6Txn6YYPmceZ+yKhbFY3AJfhJPtj95CJm87KiKgypOVTxT1mz2jJEsggZLox+njEnLK5CqX2fqmMKWAW4arK6ikSbKBquootCIooogCKKKIAiiiiAIooogCKKKIAiiiiALKKKIAiqoogDpXFFEAQqKKIYEUUUQBwrqiiBEUUUQMiiiiAIooogCKKKIAiiiiAIooogCKKKIAiiiiAIooogD//2Q==",
                }}
                style={{ width: 60, height: 80 }}
              />
              <View>
                <Text style={styles.orderinfo}>Qty - 1, Weight - 500 gms</Text>
                <Text style={styles.orderinfo}>Rs. 450</Text>
                <Text style={styles.orderinfo}>Order Status : Order</Text>
                <Text
                  style={{
                    color: "grey",
                    fontWeight: "700",
                    marginLeft: 20,
                    fontSize: 15,
                  }}
                >
                  Accepted
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                paddingLeft: 100,
                paddingTop: 10,
              }}
            >
              <View style={styles.button}>
                <TouchableOpacity>
                  <Text style={styles.buttontext}>Rate Food</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.button}>
                <TouchableOpacity>
                  <Text style={styles.buttontext}>Track Order</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Card>
        {/* --------------------------------------Chicken Biryani Cut--------------------------------------- */}
        <Card elevation={20} style={styles.card}>
          <View style={{ flex: 1, paddingTop: 20 }}>
            <Title
              style={{
                textAlign: "center",
                fontSize: 18,
                fontWeight: "bold",
                color: "grey",
                marginBottom: 10,
              }}
            >
              Chicken Biryani Cut
            </Title>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                paddingHorizontal: 25,
              }}
            >
              <Image
                source={{
                  uri: "https://5.imimg.com/data5/QT/LN/GLADMIN-7351739/chicken-boneless-small-pcs-500x500.png",
                }}
                style={{ width: 60, height: 80 }}
              />
              <View>
                <Text style={styles.orderinfo}>Qty - 1, Weight - 1.0 kg</Text>
                <Text style={styles.orderinfo}>Rs. 450</Text>
                <Text style={styles.orderinfo}>Order Status : Order</Text>
                <Text
                  style={{
                    color: "grey",
                    fontWeight: "700",
                    marginLeft: 20,
                    fontSize: 15,
                  }}
                >
                  Accepted
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                paddingLeft: 100,
                paddingTop: 10,
              }}
            >
              <View style={styles.button}>
                <TouchableOpacity>
                  <Text style={styles.buttontext}>Rate Food</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.button}>
                <TouchableOpacity>
                  <Text style={styles.buttontext}>Track Order</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Card>
        {/* --------------------------------------Chicken Boneless--------------------------------------- */}
        <Card elevation={20} style={styles.card}>
          <View style={{ flex: 1, paddingTop: 20 }}>
            <Title
              style={{
                textAlign: "center",
                fontSize: 18,
                fontWeight: "bold",
                color: "grey",
                marginBottom: 10,
              }}
            >
              Chicken Boneless
            </Title>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                paddingHorizontal: 25,
              }}
            >
              <Image
                source={{
                  uri: "data:image/jpeg;base64,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",
                }}
                style={{ width: 60, height: 80 }}
              />
              <View>
                <Text style={styles.orderinfo}>Qty - 1, Weight - 500 gms</Text>
                <Text style={styles.orderinfo}>Rs. 450</Text>
                <Text style={styles.orderinfo}>Order Status : Order</Text>
                <Text
                  style={{
                    color: "grey",
                    fontWeight: "700",
                    marginLeft: 20,
                    fontSize: 15,
                  }}
                >
                  Accepted
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                paddingLeft: 100,
                paddingTop: 10,
              }}
            >
              <View style={styles.button}>
                <TouchableOpacity>
                  <Text style={styles.buttontext}>Rate Food</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.button}>
                <TouchableOpacity>
                  <Text style={styles.buttontext}>Track Order</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Card>
      </ScrollView>
    </View>
  );
};

export default MyOrders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffff",
    paddingBottom: 50,
  },
  header: {
    backgroundColor: "#EC8238",
    height: 60,
    width: "100%",
    flexDirection: "row",
  },
  card: {
    width: "80%",
    height: 240,
    marginTop: 30,
    backgroundColor: "white",
    borderRadius: 10,
  },
  image: {
    height: 100,
    width: 100,
  },
  orderinfo: {
    color: "grey",
    fontWeight: "700",
    marginTop: 10,
    marginLeft: 20,
    fontSize: 15,
  },
  button: {
    height: 35,
    width: 100,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 5,
    borderColor: "grey",
  },
  buttontext: {
    color: "#EC8238",
    fontWeight: "700",
    fontSize: 16,
  },
});
