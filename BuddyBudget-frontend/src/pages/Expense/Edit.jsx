import { useEffect, useState } from "react";
import ConstumAxios from "../../api/ConstumAxios";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const { expenseId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    amount: "",
    description: "",
  });

  useEffect(() => {
    const fetchExpenseData = async () => {
      try {
        const response = await ConstumAxios.get(`/expenses/${expenseId}`);
        const expenseData = response.data;
        console.log(expenseData)
        setFormData(expenseData)
        // setFormData({
        //   amount: expenseData.amount,
        //   description: expenseData.description,
        // });
      } catch (error) {
        console.error("Error fetching expense data:", error);
      }
    };

    fetchExpenseData();
  }, [expenseId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  console.log(formData)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await ConstumAxios.patch(`/expenses/${expenseId}`, formData);
      navigate("/expenses");

      console.log("Expense updated successfully");
    } catch (error) {
      console.error("Error updating expense:", error);
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h1>update Expense</h1>
      <form className="p-4 md:p-5" onSubmit={handleSubmit}>
        <div className="grid gap-4 mb-4 grid-cols-2">
          <div className="col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Amount
            </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              required=""
            />
           

            {/* {errors.amount && 
          <div className="text-red-500 text-sm m-2">{errors.amount[0]}</div>} */}
          </div>

          <div className="col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Description
            </label>
            <textarea
              id="description"
               value={formData.description}
              onChange={handleChange}
              rows="4"
              name="description"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            > 
              
            </textarea>
            {/* {errors.description && 
          <div className="text-red-500 text-sm m-2">{errors.description[0]}</div>} */}
          </div>
        </div>
        <button
          type="submit"
          className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Edit;
