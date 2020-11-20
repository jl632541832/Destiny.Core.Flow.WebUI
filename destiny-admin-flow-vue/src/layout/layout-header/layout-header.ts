import { AjaxResult, IAjaxResult } from "@/shared/response";
import { Component, Emit, Vue } from "vue-property-decorator";

import ApplicationUserManager from "@/shared/config/IdentityServerLogin";
import DestinyCoreModule from "@/shared/core/DestinyCoreModule";
import { IChangePassInputDto } from "@/domain/entity/core/ChangePassInputDto";
import { MainManager } from "@/domain/services/main/main-manager";
import { MenuModule } from "@/store/modules/menumodule";
import { TokenModule } from "@/store/modules/tokenmodule";

@Component({
  name: "LayoutHeader",
})
export default class LayoutHeader extends Vue {
  DestinyCoreModule: any;
  private LogOut() {
    TokenModule.ResetToken();
    ApplicationUserManager.Logout();
    this.$router.push({
      path: "/login",
    });
  }

  private GetUserName() {
    const key =
      "oidc.user:https://auth.destinycore.club:DestinyCoreFlowReactClient";
    const ids4Info = sessionStorage.getItem(key) as any;
    return JSON.parse(ids4Info).profile.name;
  }

  private formCustom: any = {
    newPassword: "",
    passwdCheck: "",
    oldPassword: "",
  };

  validatePass: any = (rule: any, value: string, callback: any) => {
    if (value === "") {
      callback(new Error("请输入新密码"));
    } else {
      if (this.formCustom.passwdCheck !== "") {
        // 对第二个密码框单独验证
        (this.$refs.formCustom as any).validateField("passwdCheck");
      }
      callback();
    }
  };
  validatePassCheck = (rule: any, value: string, callback: any) => {
    if (value === "") {
      callback(new Error("请输入确认密码"));
    } else if (value !== this.formCustom.newPassword) {
      callback(new Error("两个输入的密码不匹配"));
    } else {
      callback();
    }
  };

  private ruleCustom = {
    oldPassword: [
      { required: true, message: "请输入当前密码：", trigger: "blur" },
    ],
    newPassword: [{ validator: this.validatePass, trigger: "blur" }],
    passwdCheck: [{ validator: this.validatePassCheck, trigger: "blur" }],
  };
  isOpen: boolean = false;
  title: string = "修改密码";

  public OpenUpdatePaw() {
    this.isOpen = true;
    (this.$refs["formCustom"] as any).resetFields();
  }

  handleSubmit(name: string) {
    (this.$refs[name] as any).validate((valid: any) => {
      if (valid) {
        let dto: IChangePassInputDto = {
          newPassword: this.formCustom.newPassword,
          oldPassword: this.formCustom.oldPassword,
        };
        MainManager.Instance()
          .SystemService.changePassword(dto)
          .then((result: IAjaxResult) => {
            DestinyCoreModule.ToAjaxResult(
              result,
              () => {
                this.isOpen = false;
                this.LogOut();
              },
              () => {
                this.isOpen = true;
              }
            );
          })
      }
    });
  }

  handleReset() {
    this.isOpen = false;
    (this.$refs["formCustom"] as any).resetFields();
  }
}
