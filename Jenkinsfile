pipeline {
    parameters {
        string(name: 'CHAT_ID',                    description: 'chat id of telegram group',            defaultValue: '-383243277')
    }
    agent none
    options {
        // Skip default checkout behavior
        skipDefaultCheckout()
    }
    stages {
        stage('Checkout SCM') {
            agent { label "master" }
            steps {
                checkout scm
                script {
                    echo "get COMMIT_ID"
                    sh 'echo -n $(git rev-parse --short HEAD) > ./commit-id'
                    commitId = readFile('./commit-id')
                }
                // stash this current workspace
                stash(name: 'ws', includes:'**,./commit-id')
            }
        }
        stage('Running Script') {
            agent { label "master" }
            steps {
                sh('chmod +x script.sh')
                sh('./script.sh')
            }
        }
    }
    // post {
    //     failure{
    //         node("Docker"){
    //             script{
    //                 withCredentials([string(credentialsId: 'telegram-token', variable: 'TELEGRAM_TOKEN')]) {
    //                     if  (BRANCH_NAME == 'master' || BRANCH_NAME == 'release' || BRANCH_NAME == 'develop'){
    //                         textMessage = "(╥﹏╥) Jenkins Job --- ${JOB_NAME}-${BUILD_NUMBER}-${commitId} is FAILED , Please check ${BUILD_URL}console"
    //                         sh "curl -s -X POST 'https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=${params.CHAT_ID}&text=${textMessage}'"
    //                     }
    //                 }
    //             }
    //         }
    //     }
    //     success{
    //         node("Docker"){
    //             script{
    //                 withCredentials([string(credentialsId: 'telegram-token', variable: 'TELEGRAM_TOKEN')]) {
    //                     if  (BRANCH_NAME == 'master' || BRANCH_NAME == 'release' || BRANCH_NAME == 'develop'){
    //                         textMessage = "҉\\(•˘▽˘•)/҉   Jenkins Job --- ${JOB_NAME}-${BUILD_NUMBER}-${commitId} is SUCCESS"
    //                         sh "curl -s -X POST 'https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=${params.CHAT_ID}&text=${textMessage}'"
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
}

