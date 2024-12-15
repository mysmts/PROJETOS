"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Testimonial = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
let Testimonial = class Testimonial {
};
exports.Testimonial = Testimonial;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Testimonial.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNotEmpty)({ message: "O nome é obrigatório" }),
    (0, class_validator_1.Length)(3, 50, { message: "O nome deve ter entre 3 e 50 caracteres" }),
    __metadata("design:type", String)
], Testimonial.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNotEmpty)({ message: "O conteúdo do depoimento é obrigatório" }),
    (0, class_validator_1.Length)(10, 500, { message: "O depoimento deve ter entre 10 e 500 caracteres" }),
    __metadata("design:type", String)
], Testimonial.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "" }),
    __metadata("design:type", String)
], Testimonial.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Testimonial.prototype, "createdAt", void 0);
exports.Testimonial = Testimonial = __decorate([
    (0, typeorm_1.Entity)()
], Testimonial);
//# sourceMappingURL=Testimonial.js.map