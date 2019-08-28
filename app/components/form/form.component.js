import { savePost } from '../../actions/posts.actions';
import { GetPostsListSelector } from '../../app.selectors';
import '../../app.scss';


class FormController {
    constructor($ngRedux) {
        this.$ngRedux = $ngRedux;
    }

    $onInit() {
        this.controllerActions = {
            savePost
        };

        this.disconnectRedux = this.$ngRedux.connect(this.mapStateToTarget, this.controllerActions)((state, actions) => {
            this.state = state;
            this.actions = actions;
        });
    }

    mapStateToTarget(state) {
        return {
            postsList: GetPostsListSelector(state)
        }
    }

    savePost() {
        this.actions.savePost(response => {
            console.log('post created:', response);
        });
        
    }

    $onDestroy() {
        this.disconnectRedux();
    }
}

export default {
    template: require('./form.template.html'),
    controller: FormController
}