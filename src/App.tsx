import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";

import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { ThxLayout } from "./thx/ThxLayout";
import { Gap } from "@alfalab/core-components/gap";
import { useState } from "react";
import { List } from "@alfalab/core-components/list";

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [transfer, setTransfer] = useState<string>("self");

  const submit = () => {
    setLoading(true);
    Promise.resolve().then(() => {
      LS.setItem(LSKeys.ShowThx, true);
      setThx(true);
      setLoading(false);
    });
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div className={appSt.container}>
        <div className={appSt.box}>
          <Gap size={24} />
          <Typography.TitleResponsive
            font="system"
            tag="h1"
            view="medium"
            weight="semibold"
          >
            Деньги на карман
          </Typography.TitleResponsive>
          <Typography.Text tag="p" view="primary-medium" color="secondary">
            Умный помощник для финансовой помощи детям
          </Typography.Text>
        </div>

        <Gap size={32} />

        <Typography.TitleResponsive
          font="system"
          tag="h3"
          view="small"
          weight="semibold"
          className={appSt.productsTitle}
        >
          Возможности
        </Typography.TitleResponsive>

        <div className={appSt.benefits}>
          <div className={appSt.benefit}>
            <Typography.Text
              tag="p"
              view="primary-small"
              weight="bold"
              style={{ marginBottom: 0 }}
            >
              Умные автоплатежи
            </Typography.Text>
            <Typography.Text tag="p" view="primary-small">
              Настраивайте регулярные переводы по расписанию или по состоянию
              баланса. Создавайте резерв на дополнительные расходы.
            </Typography.Text>
          </div>
          <div className={appSt.benefit}>
            <Typography.Text
              tag="p"
              view="primary-small"
              weight="bold"
              style={{ marginBottom: 0 }}
            >
              Запросы от ребёнка
            </Typography.Text>
            <Typography.Text tag="p" view="primary-small">
              Ребёнок может запросить дополнительные средства через приложение.
            </Typography.Text>
          </div>
          <div className={appSt.benefit}>
            <Typography.Text
              tag="p"
              view="primary-small"
              weight="bold"
              style={{ marginBottom: 0 }}
            >
              Финансовая аналитика
            </Typography.Text>
            <Typography.Text tag="p" view="primary-small">
              Отслеживайте динамику автоплатежей и создавайте финансовые
              привычки ребёнка.
            </Typography.Text>
          </div>
        </div>

        <Gap size={32} />

        <Typography.TitleResponsive
          font="system"
          tag="h3"
          view="small"
          weight="semibold"
          className={appSt.productsTitle}
        >
          Как это работает
        </Typography.TitleResponsive>

        <div style={{ display: "flex", gap: "1rem" }}>
          <ButtonMobile
            block
            view={transfer !== "self" ? "secondary" : "primary"}
            onClick={() => setTransfer("self")}
            size="xs"
          >
            Для родителя
          </ButtonMobile>
          <ButtonMobile
            block
            onClick={() => setTransfer("sfr")}
            view={transfer !== "sfr" ? "secondary" : "primary"}
            size="xs"
          >
            Для ребенка
          </ButtonMobile>
        </div>

        <Gap size={32} />

        {transfer === "self" ? (
          <>
            <List tag="ul" marker="•">
              <List.Item>Гибкие настройки в одном месте</List.Item>
              <List.Item>Уведомления о предстоящих автопереводах</List.Item>
              <List.Item>Добавление нескольких членов семьи</List.Item>
              <List.Item>Учет расходов</List.Item>
            </List>
          </>
        ) : (
          <List tag="ul" marker="•">
            <List.Item>Запрос денежных средств прямо из приложения</List.Item>
            <List.Item>
              Быстрый автоперевод от родителя при внеплановых ситуациях
            </List.Item>
          </List>
        )}
      </div>

      <Gap size={8} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile loading={loading} block view="primary" onClick={submit}>
          Подключить сервис
        </ButtonMobile>
        <Gap size={8} />
        <Typography.Text
          tag="p"
          view="primary-medium"
          style={{ marginBottom: 0, textAlign: "center" }}
        >
          До 1 члена семьи — бесплатно.
        </Typography.Text>
        <Typography.Text
          tag="p"
          view="primary-medium"
          style={{ marginBottom: 0, marginTop: 0, textAlign: "center" }}
        >
          Далее 99 руб. в месяц.
        </Typography.Text>
      </div>
    </div>
  );
};
