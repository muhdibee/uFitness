import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { getMetricMetaInfo, timeToString } from "../utils/helpers";
import UdaciSlider from './UdaciSlider'
import UdaciSteppers from './UdaciSteppers'
import DateHeader from './DateHeader'

function SubmitBtn({onPress}) {
    return (
        <TouchableOpacity onPress={onPress} >
            <View><Text onPress={onPress} >SUBMIT</Text></View>
        </TouchableOpacity>
    )
}

export default class AddEntry extends Component {
    constructor (props) {
        super(props);
        this.state = {
        run: 5,
        bike: 10,
        swim: 45,
        sleep: 30,
        eat:30,
    }
    // this.submit = this.submit.bind(this)

    }

    increment = (metric) => {
        const {max, step} = getMetricMetaInfo(metric)
        this.setState((state) =>{
            const count = state[metric] + step
            return {
                ...state, [metric]: count > max ? max : count
            }
        })
    }
    decrement = (metric) => {
        const {step} = getMetricMetaInfo(metric)
        this.setState((state) =>{
            const count = state[metric] - step
            return {
                ...state, [metric]: count < 1 ? 0 : count
            }
        })
    }
    slide = (metric, value) => {
        this.setState({
            [metric]: value
        })

        submit = () =>{
            const key = timeToString()
            const entry = this.state
        
            //Update Redux
        
            this.setState(() => ({ run: 0, bike: 0, swim: 0, sleep: 0, eat: 0 }))
            console.log ("btn clicked")
        
            // Navigate to home
        
            // Save to "DB"
        
            // Clear local notification
        }
    }
    render() {
        const metaInfo = getMetricMetaInfo()
        return (
            <View>
                <DateHeader date= {(new Date()).toLocaleDateString()}/>
                <Text>{JSON.stringify(this.state)}</Text>
                {Object.keys(metaInfo).map((key) => {
                    const {getIcon, type, ...rest} = metaInfo[key]
                    const value = this.state[key]

                    return(
                        <View key ={key}>
                            {getIcon()}
                            {type === 'slider'
                                ? <UdaciSlider value={value} onChange={(value) => this.slide(key, value)} {...rest}/>
                                : <UdaciSteppers value={value} onIncrement={() => this.increment(key)} onDecrement={() => this.decrement(key)} {...rest} />
                            }
                        </View>
                    )
                })                        
                }
                <SubmitBtn onPress= {this.submit} />
            </View>
        )
    }
}

