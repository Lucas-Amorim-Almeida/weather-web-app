import { CardWeather } from "@/components/CardWeather/CardWeather";
import styles from "./heroCard.module.scss";
import { F7Drop } from "./assets/rainDropIcon";
import { CharmArrowUp } from "./assets/windArrowIcon";
import { SolarArrowDownBroken } from "./assets/arrowDownBrokenIcon";
import { SolarArrowUpBroken } from "./assets/arrowUpBrokenIcon";
import { TdesignSunRising } from "./assets/sunRisingIcon";

const getRainData = () => {
  return {
    millemeter: "xx",
    probability: "yy",
  };
};

const getWindData = () => {
  return {
    direction: "AA",
    speed: "xx",
  };
};

const getHumidityData = () => {
  return {
    min: "xx",
    max: "yy",
  };
};

const getSunTimeData = () => {
  return {
    rise: "xx:xx:xx",
    down: "yy:yy:yy",
  };
};

export const CardHero = () => {
  return (
    <div className={styles.container}>
      <CardWeather />

      <div className={styles.card_details_info}>
        <div className={styles.weather_info_container}>
          <span>Chuva</span>
          <div className={styles.wrapperInfos}>
            <div className={styles.weather_data_container}>
              <F7Drop width="1rem" height="1rem" />
              <span>{`${getRainData().millemeter}mm - ${
                getRainData().probability
              }%`}</span>
            </div>
          </div>
        </div>

        <div className={styles.weather_info_container}>
          <span>Vento</span>
          <div className={styles.wrapperInfos}>
            <div className={styles.weather_data_container}>
              <CharmArrowUp width="1rem" height="1rem" />
              <span>{`${getWindData().direction} - ${
                getWindData().speed
              }Km/h`}</span>
            </div>
          </div>
        </div>

        <div className={styles.weather_info_container}>
          <span>Umidade</span>
          <div className={styles.wrapperInfos}>
            <div
              className={styles.weather_data_container}
              id={styles.humidity_data}
            >
              <div>
                <SolarArrowDownBroken width="1.1rem" height="1.1rem" />
                <span>{`${getHumidityData().min}%`}</span>
              </div>

              <div>
                <SolarArrowUpBroken width="1.1rem" height="1.1rem" />
                <span>{`${getHumidityData().max}%`}</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.weather_info_container}>
          <span>Sol</span>
          <div id={styles.sunInfos}>
            <span>{`${getSunTimeData().rise}h`}</span>
            <TdesignSunRising width="1rem" height="1rem" />
            <span>{`${getSunTimeData().down}h`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
