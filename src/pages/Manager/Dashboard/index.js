import classNames from "classnames/bind";

import styles from "./Dashboard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faFileInvoice,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { Line, Pie } from "react-chartjs-2"; // Import Line và Pie chart
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement // Để hỗ trợ biểu đồ tròn
);

const cx = classNames.bind(styles);

function DashboardManager() {
  // Dữ liệu cho Biểu đồ Sales (Doanh thu) dạng  đường
  const salesData = {
    labels: ["January", "February", "March", "April", "May", "June"], // Các tháng
    datasets: [
      {
        label: "Sales",
        data: [1200, 1900, 3000, 5000, 2300, 4000], // Dữ liệu doanh thu giả
        fill: false,
        borderColor: "rgba(75,192,192,1)", // Màu  viền
        backgroundColor: "rgba(75,192,192,0.2)", // Màu nền
        tension: 0.1,
      },
    ],
  };

  const salesOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Sales Over Time",
      },
    },
  };

  // Dữ liệu cho Biểu đồ Orders (Hóa đơn) dạng tròn
  const ordersData = {
    labels: ["Paid", "Unpaid"], // Nhãn cho hóa đơn
    datasets: [
      {
        label: "Orders",
        data: [70, 30], // Phần trăm hóa đơn đã thanh toán và chưa thanh toán
        backgroundColor: ["#36A2EB", "#FF6384"], // Màu sắc cho từng phần
        hoverOffset: 4,
      },
    ],
  };

  const ordersOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Order Payment Status",
      },
    },
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("name-page")}>
        <FontAwesomeIcon className={cx("icon-home")} icon={faHome} />
        <span>Dashboard</span>
      </div>

      <div className={cx("wrapper__card")}>
        <div className={cx("card__sales")}>
          <div className={cx("card__title")}>
            <h1>Sales</h1>
            <FontAwesomeIcon
              className={cx("icon-chartbar")}
              icon={faChartBar}
            />
          </div>
          <div className={cx("card__content")}>
            <p>1.500.000.000 vnđ</p>
          </div>
          <div className={cx("card__time")}>
            <p>13/11/2023 - 13/11/2024</p>
          </div>
        </div>

        <div className={cx("card__orders")}>
          <div className={cx("card__title")}>
            <h1>Order</h1>
            <FontAwesomeIcon
              className={cx("icon-chartbar")}
              icon={faFileInvoice}
            />
          </div>
          <div className={cx("card__content")}>
            <p>10.000</p>
          </div>
          <div className={cx("card__time")}>
            <p>13/11/2023 - 13/11/2024</p>
          </div>
        </div>

        <div className={cx("card__select-time")}>
          <div className={cx("select__ontime")}>
            <label className={cx("title-ontime")}>Select time</label>
            <div className={cx("option-time")}>
              <input type="radio" id="time1" name="time" value="morning" />
              <label htmlFor="time1">This week</label>
            </div>
            <div className={cx("option-time")}>
              <input type="radio" id="time2" name="time" value="afternoon" />
              <label htmlFor="time2">This month</label>
            </div>
            <div className={cx("option-time")}>
              <input type="radio" id="time3" name="time" value="evening" />
              <label htmlFor="time3">This year</label>
            </div>
          </div>
          <div className={cx("select__moretime")}>
            <div className={cx("option-time")}>
              <input type="radio" id="time4" name="time" value="afternoon" />
              <label htmlFor="time4">More time</label>
            </div>

            <div className={cx("time-selection")}>
              <div className={cx("form-date")}>
                <label htmlFor="startDate">Start Date:</label>
                <input type="date" id="startDate" name="startDate" />
              </div>

              <div className={cx("form-date")}>
                <label htmlFor="endDate">End Date:</label>
                <input type="date" id="endDate" name="endDate" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={cx("wrapper__statistical")}>
        <div className={cx("chart-sales")}>
          <Line data={salesData} options={salesOptions} />
        </div>

        <div className={cx("chart-orders")}>
          <Pie data={ordersData} options={ordersOptions} />
        </div>
      </div>
    </div>
  );
}

export default DashboardManager;
