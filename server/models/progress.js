const mongoose = require("mongoose");
const User = require("./user").schema;
const Book = require("./book");

const progressSchema = mongoose.Schema(
    {
        performanceCharts: {
            type: [Number]
        },
        allocationChartsCurrent: {
            type: [Number]
        },
        allocationChartsLastMonth: {
            type: [Number]
        },
        allocationChartPie: {
            type: [Number]
        },
        allocationCategories: {
            type: [String]
        },
        username: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

const Progress = mongoose.model("Progress", progressSchema);
module.exports = Progress;